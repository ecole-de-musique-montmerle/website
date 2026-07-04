<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import ActualiteCard from '$lib/components/ActualiteCard.svelte';
	import EndCta from '$lib/components/EndCta.svelte';
	import { formatDate } from '$lib/utils/date';
	import { fetchArticleBySlug } from '$lib/services/articles';
	import type { Actualite } from '$lib/data/actualites';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Article résolu : d'abord la version statique prérendue, puis la version
	// live Firestore si elle existe (permet de prendre en compte les
	// modifications faites depuis /admin sans rebuild).
	let article = $state<Actualite | null>(data.article);
	let related = $state(data.related);
	let notFound = $state(false);
	let loading = $state(!data.article);

	onMount(async () => {
		try {
			const live = await fetchArticleBySlug(data.slug);
			if (live) {
				article = live;
				loading = false;
			} else if (!data.article) {
				notFound = true;
				loading = false;
			} else {
				loading = false;
			}
		} catch {
			if (!data.article) {
				notFound = true;
			}
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>{article ? `${article.title} | École de Musique 3 Rivières` : 'Article introuvable'}</title>
	<meta name="description" content={article?.excerpt ?? 'Article introuvable.'} />
	{#if article}
		<meta property="og:type" content="article" />
		<meta property="og:title" content={article.title} />
		<meta property="og:description" content={article.excerpt} />
	{/if}
</svelte:head>

{#if loading}
	<section class="page-section page-section--light">
		<div class="container">
			<p class="meta-label">Chargement de l’article…</p>
		</div>
	</section>
{:else if notFound || !article}
	<section class="page-section page-section--light">
		<div class="container prose">
			<h1>Article introuvable</h1>
			<p>L’actualité demandée n’existe pas ou a été supprimée.</p>
			<p><a href={resolve('/actualites')}>← Retour aux actualités</a></p>
		</div>
	</section>
{:else}
	<article class="article" aria-labelledby="article-title">
		<header class="article__header">
			<div class="container">
				<p class="article__back meta-label">
					<a href={resolve('/actualites')}>&larr; Toutes les actualités</a>
				</p>
				<div class="article__meta">
					<span class="article__category">{article.category}</span>
					<time class="article__date meta-label" datetime={article.date}
						>{formatDate(article.date)}</time
					>
				</div>
				<h1 id="article-title" class="article__title">{article.title}</h1>
				<p class="article__excerpt">{article.excerpt}</p>
				<p class="article__author meta-label">Par {article.author}</p>
			</div>
		</header>

		<figure class="article__cover">
			<img
				src={article.cover.src}
				alt={article.cover.alt}
				width={article.cover.width}
				height={article.cover.height}
				loading="eager"
				decoding="async"
			/>
		</figure>

		<div class="page-section page-section--light">
			<div class="container article__content">
				<div class="prose">
					{#each article.body as block, i (i)}
						{#if block.type === 'heading'}
							<h2>{block.text}</h2>
						{:else if block.type === 'quote'}
							<blockquote>
								<p>{block.text}</p>
								{#if block.cite}<cite>— {block.cite}</cite>{/if}
							</blockquote>
						{:else}
							<p>{block.text}</p>
						{/if}
					{/each}

					{#if article.source}
						<p class="article__source">
							Source&nbsp;:
							<a href={article.source.href} target="_blank" rel="noopener noreferrer external"
								>{article.source.label}</a
							>
						</p>
					{/if}
				</div>
			</div>
		</div>
	</article>

	{#if related.length > 0}
		<section
			class="page-section page-section--light article__related"
			aria-labelledby="related-title"
		>
			<div class="container">
				<h2 id="related-title" class="article__related-title">À lire aussi</h2>
				<ul class="grid list-unstyled" role="list">
					{#each related as item (item.slug)}
						<li>
							<ActualiteCard article={item} href={resolve(`/actualites/${item.slug}`)} />
						</li>
					{/each}
				</ul>
			</div>
		</section>
	{/if}

	<EndCta
		title="Envie de rejoindre l'école&nbsp;?"
		lede="Cours individuels, chorales, éveil musical et ensembles, à Montmerle-sur-Saône."
		cta={{ href: resolve('/inscription'), label: "S'inscrire" }}
	/>
{/if}

<style>
	.article__header {
		background-color: var(--color-surface-primary);
		color: var(--color-text-on-dark);
		padding-block: clamp(var(--space-9), 5vw, var(--space-12)) var(--space-10);
	}

	.article__back {
		margin-block-end: var(--space-7);
	}

	.article__back a {
		transition: color var(--motion-fast) var(--ease-out);
	}

	@media (hover: hover) {
		.article__back a:hover {
			color: var(--color-gold);
		}
	}

	.article__meta {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		flex-wrap: wrap;
		margin-block-end: var(--space-5);
	}

	.article__category {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		padding: var(--space-1) var(--space-3);
		color: var(--color-noir);
		background-color: var(--color-gold);
		border-radius: var(--radius-pill);
	}

	.article__date {
		color: var(--color-text-on-dark-muted);
	}

	.article__title {
		font-size: var(--font-size-4xl);
		line-height: var(--line-height-heading);
		letter-spacing: var(--tracking-tight);
		max-width: var(--measure-sm);
		margin-block-end: var(--space-5);
	}

	.article__excerpt {
		font-size: var(--font-size-md);
		line-height: var(--line-height-body);
		color: var(--color-text-on-dark-muted);
		max-width: var(--measure-2xl);
		margin-block-end: var(--space-4);
	}

	.article__author {
		color: var(--color-text-on-dark-muted);
	}

	.article__cover {
		margin: 0;
		padding-block: var(--space-8) 0;
		background-color: var(--color-surface-primary);
	}

	.article__cover img {
		width: 100%;
		height: auto;
		aspect-ratio: var(--ratio-cinema);
		object-fit: cover;
	}

	.article__content {
		padding-block: clamp(var(--space-8), 5vw, var(--space-11));
	}

	.article__content .prose {
		max-width: var(--measure-3xl);
		margin-inline: auto;
	}

	.article__source {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		padding-block-start: var(--space-6);
		border-block-start: var(--border-thin) solid var(--color-line);
	}

	.article__source a {
		border-block-end: var(--border-thin) solid currentColor;
	}

	.article__related {
		padding-block-start: 0;
	}

	.article__related-title {
		font-size: var(--font-size-3xl);
		letter-spacing: var(--tracking-tight);
		margin-block-end: clamp(var(--space-6), 4vw, var(--space-8));
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2.5vw, var(--space-7));
	}

	.grid li {
		display: flex;
	}

	.grid :global(.card) {
		width: 100%;
	}

	@media (max-width: 48rem) {
		.article__title {
			font-size: var(--font-size-3xl);
		}
	}
</style>
