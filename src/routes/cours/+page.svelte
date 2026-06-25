<script lang="ts">
	import { resolve } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import {
		coursVisuels,
		ensembles,
		formation,
		instrumentFamilies,
		parcours,
		voix
	} from '$lib/data/cours';
	import { professeurs } from '$lib/data/professeurs';

	const professeurBySlug = new Map(
		professeurs.map((p) => [p.slug, `${p.firstName} ${p.lastName}`])
	);
</script>

<svelte:head>
	<title>Cours et pratiques | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Cours individuels d'instrument, chant et chorales, formation musicale et éveil, ensembles et ateliers collectifs à Montmerle-sur-Saône. Du débutant au musicien confirmé, dès 4 ans."
	/>
</svelte:head>

<PageHero
	title="Cours et pratiques"
	lede="Cours individuels d'instrument, chant, chorales, éveil musical, formation musicale et ensembles collectifs. Pour les enfants, les ados et les adultes, du débutant au musicien confirmé."
/>

<!-- Cours individuels -->
<section class="page-section page-section--light" aria-labelledby="cours-individuels">
	<div class="container block-stack">
		<header class="block-header cours-header">
			<div>
				<h2 id="cours-individuels" class="block-title">Cours individuels</h2>
				<p class="block-lede">
					Pratique instrumentale en face à face avec un professeur, pour découvrir, progresser ou
					reprendre un instrument à son rythme. Onze instruments, du classique aux musiques
					actuelles.
				</p>
			</div>
			<figure class="cours-figure">
				<img
					class="cours-figure__img"
					src={coursVisuels.instruments.src}
					alt={coursVisuels.instruments.alt}
					width={coursVisuels.instruments.width}
					height={coursVisuels.instruments.height}
					loading="lazy"
					decoding="async"
				/>
			</figure>
		</header>

		<div class="families">
			{#each instrumentFamilies as family (family.family)}
				<article class="family">
					<div class="family__head">
						<h3 class="family__title">{family.family}</h3>
						<p class="family__blurb">{family.blurb}</p>
					</div>
					<ul class="family__items list-unstyled" role="list">
						{#each family.items as instrument (instrument.name)}
							<li class="instrument">
								<span class="instrument__name">{instrument.name}</span>
								{#if instrument.teachers && instrument.teachers.length > 0}
									<ul class="instrument__teachers list-unstyled" role="list">
										{#each instrument.teachers as slug (slug)}
											{#if professeurBySlug.has(slug)}
												<li>
													<a class="instrument__teacher" href={resolve(`/professeurs#${slug}`)}>
														avec {professeurBySlug.get(slug)}
													</a>
												</li>
											{/if}
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Voix et chorales -->
<section class="page-section page-section--dark" aria-labelledby="voix">
	<div class="container block-stack">
		<header class="block-header block-header--on-dark">
			<h2 id="voix" class="block-title">Voix et chorales</h2>
			<p class="block-lede block-lede--on-dark">
				Pratique vocale individuelle ou collective, accompagnée par des professeurs expérimentés.
				Chanter seul, à plusieurs, en chorale d'enfants ou d'adultes.
			</p>
		</header>

		<ul class="items list-unstyled" role="list">
			{#each voix as item (item.title)}
				{@const hasTeachers =
					item.teachers && item.teachers.filter((s) => professeurBySlug.has(s)).length > 0}
				<li class="item item--on-dark">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta meta-label">{item.meta}</p>{/if}
					{#if item.body}<p class="item__body">{item.body}</p>{/if}
					{#if hasTeachers}
						<ul class="item__teachers list-unstyled" role="list">
							{#each item.teachers as slug (slug)}
								{#if professeurBySlug.has(slug)}
									<li>
										<a class="item__teacher" href={resolve(`/professeurs#${slug}`)}>
											{professeurBySlug.get(slug)}
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Formation et éveil -->
<section class="page-section page-section--light" aria-labelledby="formation">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="formation" class="block-title">Formation et éveil</h2>
			<p class="block-lede">
				Comprendre la musique, apprendre à lire et à écouter, dès le plus jeune âge. Une base
				indispensable qui nourrit la pratique instrumentale et collective.
			</p>
		</header>

		<ul class="items items--detail list-unstyled" role="list">
			{#each formation as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta meta-label">{item.meta}</p>{/if}
					{#if item.body}<p class="item__body">{item.body}</p>{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Ensembles et ateliers -->
<section class="page-section page-section--dark" aria-labelledby="ensembles">
	<div class="container block-stack">
		<header class="block-header block-header--on-dark ensembles-header">
			<div>
				<h2 id="ensembles" class="block-title">Ensembles et ateliers</h2>
				<p class="block-lede block-lede--on-dark">
					Pratiquer ensemble, monter un répertoire, jouer en concert. Les ensembles sont le cœur
					vivant de l'école.
				</p>
			</div>
			<figure class="cours-figure cours-figure--on-dark">
				<img
					class="cours-figure__img"
					src={coursVisuels.ensembles.src}
					alt={coursVisuels.ensembles.alt}
					width={coursVisuels.ensembles.width}
					height={coursVisuels.ensembles.height}
					loading="lazy"
					decoding="async"
				/>
			</figure>
		</header>

		<ul class="items items--detail list-unstyled" role="list">
			{#each ensembles as item (item.title)}
				{@const hasTeachers =
					item.teachers && item.teachers.filter((s) => professeurBySlug.has(s)).length > 0}
				<li class="item item--on-dark">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta meta-label">{item.meta}</p>{/if}
					{#if item.body}<p class="item__body">{item.body}</p>{/if}
					{#if hasTeachers}
						<ul class="item__teachers list-unstyled" role="list">
							{#each item.teachers as slug (slug)}
								{#if professeurBySlug.has(slug)}
									<li>
										<a class="item__teacher" href={resolve(`/professeurs#${slug}`)}>
											{professeurBySlug.get(slug)}
										</a>
									</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Parcours pédagogique -->
<section class="page-section page-section--light" aria-labelledby="parcours">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="parcours" class="block-title">Un parcours, de l'éveil à la scène</h2>
			<p class="block-lede">
				L'école accompagne chaque élève sur la durée, du premier contact musical aux auditions et à
				la scène ouverte. Un chemin souple, adaptable à chaque âge et chaque projet.
			</p>
		</header>

		<ol class="parcours list-unstyled" role="list">
			{#each parcours as step (step.step)}
				<li class="parcours__step">
					<span class="parcours__num" aria-hidden="true">{step.step}</span>
					<div class="parcours__body">
						<h3 class="parcours__title">{step.title}</h3>
						{#if step.age}<p class="parcours__age meta-label">{step.age}</p>{/if}
						<p class="parcours__text">{step.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<EndCta
	title="Une question sur les cours&nbsp;?"
	lede="Nous vous présentons l'école et accompagnons votre choix d'instrument ou d'ensemble, sur rendez-vous du lundi au samedi."
	cta={{ href: resolve('/contact'), label: 'Contactez-nous' }}
/>

<style>
	/* --- En-tête de bloc avec visuel --- */
	.cours-header,
	.ensembles-header {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
		gap: clamp(var(--space-6), 5vw, var(--space-10));
		align-items: center;
		max-width: none;
	}

	.cours-figure {
		max-width: var(--media-max-md);
		margin-inline-start: auto;
	}

	.cours-figure__img {
		width: 100%;
		height: auto;
		aspect-ratio: var(--ratio-photo);
		object-fit: cover;
		border-radius: var(--radius-md);
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
	}

	.cours-figure--on-dark .cours-figure__img {
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.3);
	}

	.block-header--on-dark {
		max-width: var(--measure-2xl);
	}

	.block-lede--on-dark {
		color: var(--color-text-on-dark-muted);
	}

	/* --- Familles d'instruments --- */
	.families {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2vw, var(--space-7));
	}

	.family {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
	}

	.family__head {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.family__title {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-secondary);
	}

	.family__blurb {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	.family__items {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.instrument {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding-block-end: var(--space-4);
		border-block-end: var(--border-thin) solid var(--color-line);
	}

	.instrument:last-child {
		border-block-end: 0;
		padding-block-end: 0;
	}

	.instrument__name {
		font-family: var(--font-display);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
	}

	.instrument__teachers {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.instrument__teacher {
		font-size: var(--font-size-xs);
		color: var(--color-text-secondary);
		border-block-end: var(--border-thin) solid currentColor;
		transition: color var(--motion-fast) var(--ease-out);
	}

	@media (hover: hover) {
		.instrument__teacher:hover {
			color: var(--color-blue);
		}
	}

	/* --- Grilles d'items (voix, formation, ensembles) --- */
	.items {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2vw, var(--space-7));
	}

	.item {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
	}

	.item--on-dark {
		background-color: oklch(from var(--color-ivoire) l c h / 0.06);
		border: var(--border-thin) solid oklch(from var(--color-ivoire) l c h / var(--opacity-2));
		box-shadow: none;
	}

	.item__title {
		font-size: var(--font-size-xl);
		letter-spacing: var(--tracking-tight);
	}

	.item__meta {
		color: var(--color-text-secondary);
	}

	.item--on-dark .item__meta {
		color: var(--color-text-accent);
	}

	.item__body {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	.item--on-dark .item__body {
		color: var(--color-text-on-dark-muted);
	}

	.item__teachers {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-block-start: var(--space-1);
	}

	.item__teacher {
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		padding: var(--space-1) var(--space-3);
		border: var(--border-thin) solid oklch(from var(--color-noir) l c h / var(--opacity-2));
		border-radius: var(--radius-pill);
		color: var(--color-text-secondary);
		transition:
			color var(--motion-fast) var(--ease-out),
			border-color var(--motion-fast) var(--ease-out);
	}

	.item--on-dark .item__teacher {
		border-color: oklch(from var(--color-ivoire) l c h / var(--opacity-3));
		color: var(--color-text-on-dark-muted);
	}

	@media (hover: hover) {
		.item__teacher:hover {
			color: var(--color-blue);
			border-color: var(--color-blue);
		}

		.item--on-dark .item__teacher:hover {
			color: var(--color-noir);
			background-color: var(--color-gold);
			border-color: var(--color-gold);
		}
	}

	/* --- Parcours pédagogique --- */
	.parcours {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(15rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2vw, var(--space-7));
		counter-reset: parcours;
	}

	.parcours__step {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
		position: relative;
	}

	.parcours__num {
		font-family: var(--font-display);
		font-size: var(--font-size-2xl);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
		color: var(--color-gold-deep);
	}

	.parcours__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.parcours__title {
		font-size: var(--font-size-lg);
		letter-spacing: var(--tracking-tight);
	}

	.parcours__age {
		color: var(--color-text-secondary);
	}

	.parcours__text {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	@media (max-width: 48rem) {
		.cours-header,
		.ensembles-header {
			grid-template-columns: 1fr;
			gap: var(--space-5);
		}

		.cours-figure {
			max-width: 100%;
			margin-inline-start: 0;
		}
	}
</style>
