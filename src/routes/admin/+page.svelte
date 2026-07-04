<script lang="ts">
	import { onMount } from 'svelte';
	import { authStore } from '$lib/auth.svelte';
	import { subscribeArticles, saveArticle, deleteArticle } from '$lib/services/articles';
	import type { Actualite, ActualiteBlock } from '$lib/data/actualites';
	import { ETABLISSEMENT } from '$lib/data/etablissement';

	type Category = Actualite['category'];
	const CATEGORIES: Category[] = ['Audition', 'Concert', 'Vie associative', 'Inscriptions'];
	const BLOCK_TYPES: ActualiteBlock['type'][] = ['paragraph', 'heading', 'quote'];

	let articles = $state<Actualite[]>([]);
	let articlesLoading = $state(true);
	let articlesError = $state<string | null>(null);
	let unsubscribe: (() => void) | null = null;

	let view = $state<'list' | 'edit'>('list');
	let editingSlug = $state<string | null>(null); // null = nouvel article
	let saving = $state(false);
	let saveError = $state<string | null>(null);
	let saveOk = $state(false);
	let confirmDeleteSlug = $state<string | null>(null);

	// Brouillon du formulaire d'édition.
	type Draft = {
		slug: string;
		title: string;
		excerpt: string;
		date: string;
		category: Category;
		author: string;
		coverSrc: string;
		coverWidth: number;
		coverHeight: number;
		coverAlt: string;
		body: ActualiteBlock[];
		sourceLabel: string;
		sourceHref: string;
	};

	function emptyDraft(): Draft {
		return {
			slug: '',
			title: '',
			excerpt: '',
			date: new Date().toISOString().slice(0, 10),
			category: 'Vie associative',
			author: ETABLISSEMENT.nom,
			coverSrc: '',
			coverWidth: 1920,
			coverHeight: 1280,
			coverAlt: '',
			body: [{ type: 'paragraph', text: '' }],
			sourceLabel: '',
			sourceHref: ''
		};
	}

	let draft = $state<Draft>(emptyDraft());

	function slugify(text: string): string {
		return text
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-+|-+$/g, '')
			.slice(0, 80);
	}

	function articleToDraft(a: Actualite): Draft {
		return {
			slug: a.slug,
			title: a.title,
			excerpt: a.excerpt,
			date: a.date,
			category: a.category,
			author: a.author,
			coverSrc: a.cover.src,
			coverWidth: a.cover.width,
			coverHeight: a.cover.height,
			coverAlt: a.cover.alt,
			body: a.body.map((b) => ({ ...b })),
			sourceLabel: a.source?.label ?? '',
			sourceHref: a.source?.href ?? ''
		};
	}

	function draftToArticle(d: Draft): Actualite {
		const body = d.body.filter((b) => b.text.trim().length > 0);
		const source =
			d.sourceLabel.trim() && d.sourceHref.trim()
				? { label: d.sourceLabel.trim(), href: d.sourceHref.trim() }
				: undefined;
		return {
			slug: d.slug.trim() || slugify(d.title),
			title: d.title.trim(),
			excerpt: d.excerpt.trim(),
			date: d.date,
			category: d.category,
			author: d.author.trim() || ETABLISSEMENT.nom,
			cover: {
				src: d.coverSrc.trim(),
				width: Number(d.coverWidth) || 1920,
				height: Number(d.coverHeight) || 1280,
				alt: d.coverAlt.trim()
			},
			body,
			...(source ? { source } : {})
		};
	}

	function startNew() {
		editingSlug = null;
		draft = emptyDraft();
		saveError = null;
		saveOk = false;
		view = 'edit';
	}

	function startEdit(a: Actualite) {
		editingSlug = a.slug;
		draft = articleToDraft(a);
		saveError = null;
		saveOk = false;
		view = 'edit';
	}

	function cancelEdit() {
		view = 'list';
		editingSlug = null;
		draft = emptyDraft();
	}

	async function submitSave() {
		saveError = null;
		saveOk = false;
		const article = draftToArticle(draft);
		if (!article.title) {
			saveError = 'Le titre est obligatoire.';
			return;
		}
		if (!article.slug) {
			saveError = 'Le slug est obligatoire.';
			return;
		}
		if (!article.cover.src) {
			saveError = "L'URL de l'image de couverture est obligatoire.";
			return;
		}
		// Si on édite un article existant et qu'on change le slug, on supprime
		// l'ancien document puis on crée le nouveau.
		saving = true;
		try {
			if (editingSlug && editingSlug !== article.slug) {
				await deleteArticle(editingSlug);
			}
			const isNew = editingSlug === null;
			await saveArticle(article, isNew);
			editingSlug = article.slug;
			saveOk = true;
			view = 'list';
		} catch (err) {
			saveError = err instanceof Error ? err.message : "Échec de l'enregistrement.";
		} finally {
			saving = false;
		}
	}

	async function removeArticle(slug: string) {
		try {
			await deleteArticle(slug);
			if (editingSlug === slug) cancelEdit();
		} catch (err) {
			articlesError = err instanceof Error ? err.message : 'Échec de la suppression.';
		} finally {
			confirmDeleteSlug = null;
		}
	}

	// Éditeurs de blocs du corps.
	function addBlock(type: ActualiteBlock['type']) {
		draft.body = [...draft.body, { type, text: '' }];
	}
	function updateBlock(index: number, patch: Partial<ActualiteBlock>) {
		draft.body = draft.body.map((b, i) =>
			i === index ? ({ ...b, ...patch } as ActualiteBlock) : b
		);
	}
	function removeBlock(index: number) {
		draft.body = draft.body.filter((_, i) => i !== index);
	}
	function moveBlock(index: number, dir: -1 | 1) {
		const target = index + dir;
		if (target < 0 || target >= draft.body.length) return;
		const next = [...draft.body];
		[next[index], next[target]] = [next[target], next[index]];
		draft.body = next;
	}

	onMount(() => {
		unsubscribe = subscribeArticles(
			(list) => {
				articles = list;
				articlesLoading = false;
			},
			(err) => {
				articlesError = err.message;
				articlesLoading = false;
			}
		);
		return () => unsubscribe?.();
	});

	const user = $derived(authStore.user);
	const authLoading = $derived(authStore.loading);
	const authError = $derived(authStore.error);
</script>

<svelte:head>
	<title>Administration | École de Musique 3 Rivières</title>
	<meta name="robots" content="noindex, nofollow, noarchive" />
	<meta name="googlebot" content="noindex, nofollow" />
</svelte:head>

<section class="admin">
	{#if authLoading}
		<div class="admin__state">
			<p class="meta-label">Vérification de la session…</p>
		</div>
	{:else if !user}
		<div class="admin__login">
			<div class="admin__login-card">
				<h1 class="admin__title">Espace administration</h1>
				<p class="admin__lede">
					Connectez-vous avec un compte Google autorisé pour gérer les actualités du site.
				</p>
				{#if authError}
					<p class="admin__error" role="alert">{authError}</p>
				{/if}
				<button class="btn btn--primary btn--md" onclick={() => authStore.signInWithGoogle()}>
					Se connecter avec Google
				</button>
				<p class="admin__hint meta-label">
					Accès réservé. La page <code>/admin</code> n'est pas référencée sur le site public.
				</p>
			</div>
		</div>
	{:else if view === 'edit'}
		<header class="admin__bar">
			<div class="container admin__bar-inner">
				<h1 class="admin__heading">
					{editingSlug ? 'Modifier l’article' : 'Nouvel article'}
				</h1>
				<div class="admin__bar-actions">
					<button class="btn btn--ghost btn--sm" onclick={cancelEdit} disabled={saving}>
						Annuler
					</button>
					<button class="btn btn--primary btn--sm" onclick={submitSave} disabled={saving}>
						{saving ? 'Enregistrement…' : 'Enregistrer'}
					</button>
				</div>
			</div>
		</header>

		<div class="container admin__body">
			{#if saveError}
				<p class="admin__error" role="alert">{saveError}</p>
			{/if}

			<fieldset class="admin__group">
				<legend class="admin__legend">Identité</legend>
				<label class="field">
					<span class="field__label">Titre</span>
					<input
						class="field__input"
						type="text"
						bind:value={draft.title}
						placeholder="Titre de l’actualité"
					/>
				</label>
				<label class="field">
					<span class="field__label">Slug (URL)</span>
					<div class="field__row">
						<input
							class="field__input"
							type="text"
							bind:value={draft.slug}
							placeholder="slug-de-l-article"
						/>
						<button
							class="btn btn--ghost btn--sm"
							type="button"
							onclick={() => (draft.slug = slugify(draft.title))}
						>
							Générer
						</button>
					</div>
				</label>
				<label class="field">
					<span class="field__label">Résumé (extrait)</span>
					<textarea class="field__input" rows="3" bind:value={draft.excerpt}></textarea>
				</label>
				<div class="field__grid">
					<label class="field">
						<span class="field__label">Date</span>
						<input class="field__input" type="date" bind:value={draft.date} />
					</label>
					<label class="field">
						<span class="field__label">Catégorie</span>
						<select class="field__input" bind:value={draft.category}>
							{#each CATEGORIES as c (c)}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</label>
					<label class="field">
						<span class="field__label">Auteur</span>
						<input class="field__input" type="text" bind:value={draft.author} />
					</label>
				</div>
			</fieldset>

			<fieldset class="admin__group">
				<legend class="admin__legend">Image de couverture</legend>
				<label class="field">
					<span class="field__label">URL de l’image</span>
					<input
						class="field__input"
						type="url"
						bind:value={draft.coverSrc}
						placeholder="https://…/image.webp"
					/>
				</label>
				<label class="field">
					<span class="field__label">Texte alternatif (alt)</span>
					<input class="field__input" type="text" bind:value={draft.coverAlt} />
				</label>
				<div class="field__grid">
					<label class="field">
						<span class="field__label">Largeur (px)</span>
						<input class="field__input" type="number" bind:value={draft.coverWidth} />
					</label>
					<label class="field">
						<span class="field__label">Hauteur (px)</span>
						<input class="field__input" type="number" bind:value={draft.coverHeight} />
					</label>
				</div>
				{#if draft.coverSrc}
					<p class="admin__preview-label meta-label">Aperçu</p>
					<img class="admin__preview" src={draft.coverSrc} alt={draft.coverAlt} loading="lazy" />
				{/if}
			</fieldset>

			<fieldset class="admin__group">
				<legend class="admin__legend">Corps de l’article</legend>
				<ol class="blocks list-unstyled">
					{#each draft.body as block, i (i)}
						<li class="block">
							<div class="block__head">
								<select
									class="field__input field__input--sm"
									value={block.type}
									onchange={(e) =>
										updateBlock(i, { type: e.currentTarget.value as ActualiteBlock['type'] })}
								>
									{#each BLOCK_TYPES as t (t)}
										<option value={t}>
											{t === 'paragraph' ? 'Paragraphe' : t === 'heading' ? 'Titre' : 'Citation'}
										</option>
									{/each}
								</select>
								<div class="block__actions">
									<button
										class="btn btn--ghost btn--sm"
										type="button"
										aria-label="Monter"
										onclick={() => moveBlock(i, -1)}
										disabled={i === 0}>↑</button
									>
									<button
										class="btn btn--ghost btn--sm"
										type="button"
										aria-label="Descendre"
										onclick={() => moveBlock(i, 1)}
										disabled={i === draft.body.length - 1}>↓</button
									>
									<button
										class="btn btn--ghost btn--sm"
										type="button"
										aria-label="Supprimer le bloc"
										onclick={() => removeBlock(i)}>Retirer</button
									>
								</div>
							</div>
							<textarea
								class="field__input"
								rows={block.type === 'heading' ? 1 : 3}
								placeholder={block.type === 'heading' ? 'Titre de section' : 'Texte'}
								value={block.text}
								oninput={(e) => updateBlock(i, { text: e.currentTarget.value })}></textarea>
							{#if block.type === 'quote'}
								<input
									class="field__input"
									type="text"
									placeholder="Source / citation (optionnel)"
									value={block.cite ?? ''}
									oninput={(e) => updateBlock(i, { cite: e.currentTarget.value })}
								/>
							{/if}
						</li>
					{/each}
				</ol>
				<div class="blocks__add">
					<button
						class="btn btn--ghost btn--sm"
						type="button"
						onclick={() => addBlock('paragraph')}
					>
						+ Paragraphe
					</button>
					<button class="btn btn--ghost btn--sm" type="button" onclick={() => addBlock('heading')}>
						+ Titre
					</button>
					<button class="btn btn--ghost btn--sm" type="button" onclick={() => addBlock('quote')}>
						+ Citation
					</button>
				</div>
			</fieldset>

			<fieldset class="admin__group">
				<legend class="admin__legend">Source (optionnel)</legend>
				<div class="field__grid">
					<label class="field">
						<span class="field__label">Libellé</span>
						<input class="field__input" type="text" bind:value={draft.sourceLabel} />
					</label>
					<label class="field">
						<span class="field__label">Lien</span>
						<input class="field__input" type="url" bind:value={draft.sourceHref} />
					</label>
				</div>
			</fieldset>
		</div>
	{:else}
		<header class="admin__bar">
			<div class="container admin__bar-inner">
				<h1 class="admin__heading">Actualités</h1>
				<div class="admin__bar-actions">
					<button class="btn btn--ghost btn--sm" onclick={() => authStore.signOutUser()}>
						Déconnexion
					</button>
					<button class="btn btn--primary btn--sm" onclick={startNew}>Nouvel article</button>
				</div>
			</div>
		</header>

		<div class="container admin__body">
			<p class="admin__user meta-label">
				Connecté en tant que <strong>{user.email}</strong>
			</p>

			{#if saveOk}
				<p class="admin__ok" role="status">Article enregistré.</p>
			{/if}
			{#if articlesError}
				<p class="admin__error" role="alert">{articlesError}</p>
			{/if}

			{#if articlesLoading}
				<p class="meta-label">Chargement des articles…</p>
			{:else if articles.length === 0}
				<p class="meta-label">Aucun article. Créez le premier avec « Nouvel article ».</p>
			{:else}
				<ul class="admin__list list-unstyled" role="list">
					{#each articles as a (a.slug)}
						<li class="admin__row">
							<div class="admin__row-main">
								<p class="admin__row-title">{a.title || '(sans titre)'}</p>
								<p class="admin__row-meta meta-label">
									<span class="admin__chip">{a.category}</span>
									{a.date} · /{a.slug}
								</p>
							</div>
							<div class="admin__row-actions">
								<button class="btn btn--ghost btn--sm" onclick={() => startEdit(a)}>Éditer</button>
								{#if confirmDeleteSlug === a.slug}
									<button class="btn btn--primary btn--sm" onclick={() => removeArticle(a.slug)}>
										Confirmer
									</button>
									<button class="btn btn--ghost btn--sm" onclick={() => (confirmDeleteSlug = null)}
										>Annuler</button
									>
								{:else}
									<button
										class="btn btn--ghost btn--sm"
										onclick={() => (confirmDeleteSlug = a.slug)}>Supprimer</button
									>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/if}
</section>

<style>
	.admin {
		padding-block: clamp(var(--space-7), 5vw, var(--space-10)) var(--space-12);
		min-block-size: 60vh;
	}

	.admin__state,
	.admin__login {
		display: grid;
		place-items: center;
		padding-block: var(--space-12);
	}

	.admin__login-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-4);
		max-width: 32rem;
		padding: clamp(var(--space-6), 4vw, var(--space-8));
		background-color: var(--color-paper);
		border: var(--border-thin) solid var(--color-line);
		border-radius: var(--radius-md, 0.5rem);
	}

	.admin__title {
		font-family: var(--font-display);
		font-size: var(--font-size-2xl);
		letter-spacing: var(--tracking-tight);
	}

	.admin__lede {
		color: var(--color-text-secondary);
		line-height: var(--line-height-body);
	}

	.admin__hint {
		color: var(--color-text-secondary);
	}

	.admin__hint code {
		font-family: var(--font-body);
		background-color: var(--color-surface-secondary);
		padding-inline: var(--space-1);
		border-radius: 0.25rem;
	}

	.admin__bar {
		border-block-end: var(--border-thin) solid var(--color-line);
		background-color: var(--color-paper);
		padding-block: var(--space-4);
	}

	.admin__bar-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		flex-wrap: wrap;
	}

	.admin__heading {
		font-family: var(--font-display);
		font-size: var(--font-size-xl);
		letter-spacing: var(--tracking-tight);
	}

	.admin__bar-actions {
		display: flex;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	.admin__body {
		padding-block-start: var(--space-7);
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
	}

	.admin__user {
		color: var(--color-text-secondary);
	}

	.admin__error {
		color: oklch(0.45 0.18 25);
		background-color: oklch(0.96 0.05 25);
		padding: var(--space-3) var(--space-4);
		border-radius: 0.375rem;
	}

	.admin__ok {
		color: oklch(0.4 0.12 150);
		background-color: oklch(0.96 0.04 150);
		padding: var(--space-3) var(--space-4);
		border-radius: 0.375rem;
	}

	.admin__group {
		border: var(--border-thin) solid var(--color-line);
		border-radius: 0.5rem;
		padding: var(--space-5);
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin: 0;
	}

	.admin__legend {
		font-family: var(--font-display);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-medium);
		padding-inline: var(--space-2);
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.field__label {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-secondary);
	}

	.field__input {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		color: var(--color-text-primary);
		background-color: var(--color-paper);
		border: var(--border-thin) solid var(--color-line);
		border-radius: 0.375rem;
		padding: var(--space-3);
		width: 100%;
		box-sizing: border-box;
	}

	.field__input:focus {
		outline: 2px solid var(--color-action-focus);
		outline-offset: 1px;
	}

	.field__input--sm {
		padding: var(--space-2) var(--space-3);
	}

	.field__row {
		display: flex;
		gap: var(--space-2);
	}

	.field__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
		gap: var(--space-4);
	}

	.admin__preview-label {
		color: var(--color-text-secondary);
	}

	.admin__preview {
		max-width: 100%;
		max-height: 14rem;
		width: auto;
		border-radius: 0.375rem;
		border: var(--border-thin) solid var(--color-line);
	}

	.blocks {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-3);
		border: var(--border-thin) solid var(--color-line);
		border-radius: 0.375rem;
		background-color: var(--color-surface-secondary);
	}

	.block__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.block__actions {
		display: flex;
		gap: var(--space-2);
	}

	.blocks__add {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.admin__list {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.admin__row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-4);
		border: var(--border-thin) solid var(--color-line);
		border-radius: 0.5rem;
		background-color: var(--color-paper);
		flex-wrap: wrap;
	}

	.admin__row-main {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		min-width: 0;
	}

	.admin__row-title {
		font-family: var(--font-display);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-medium);
	}

	.admin__row-meta {
		color: var(--color-text-secondary);
		display: flex;
		align-items: center;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.admin__chip {
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		padding: var(--space-1) var(--space-2);
		color: var(--color-noir);
		background-color: var(--color-gold);
		border-radius: var(--radius-pill);
	}

	.admin__row-actions {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}
</style>
