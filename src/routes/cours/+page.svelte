<script lang="ts">
	import { resolve } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import { instrumentFamilies, voix, formation, ensembles } from '$lib/data/cours';
</script>

<svelte:head>
	<title>Cours et pratiques | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Cours individuels d'instrument, chant et chorales, formation musicale et éveil, ensembles et ateliers collectifs à Montmerle-sur-Saône."
	/>
</svelte:head>

<PageHero
	title="Cours et pratiques"
	lede="Cours individuels d'instrument, chant, chorales, éveil musical, formation musicale et ensembles collectifs. Pour les enfants, les ados et les adultes, du débutant au musicien confirmé."
/>

<section class="page-section page-section--light" aria-labelledby="cours-individuels">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="cours-individuels" class="block-title">Cours individuels</h2>
			<p class="block-lede">
				Pratique instrumentale en face à face avec un professeur, pour découvrir, progresser ou
				reprendre un instrument à son rythme.
			</p>
		</header>

		<div class="families">
			{#each instrumentFamilies as family (family.family)}
				<article class="family">
					<h3 class="family__title meta-label">{family.family}</h3>
					<ul class="family__items list-unstyled" role="list">
						{#each family.items as instrument (instrument)}
							<li>{instrument}</li>
						{/each}
					</ul>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="voix">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="voix" class="block-title">Voix et chorales</h2>
			<p class="block-lede">
				Pratique vocale individuelle ou collective, accompagnée par des professeurs expérimentés.
			</p>
		</header>

		<ul class="items list-unstyled" role="list">
			{#each voix as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					<p class="item__meta meta-label">{item.meta}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="formation">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="formation" class="block-title">Formation et éveil</h2>
			<p class="block-lede">
				Comprendre la musique, apprendre à lire et à écouter, dès le plus jeune âge.
			</p>
		</header>

		<ul class="items items--detail list-unstyled" role="list">
			{#each formation as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta meta-label">{item.meta}</p>{/if}
					<p class="item__body">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="ensembles">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="ensembles" class="block-title">Ensembles et ateliers</h2>
			<p class="block-lede">
				Pratiquer ensemble, monter un répertoire, jouer en concert. Les ensembles sont le cœur
				vivant de l'école.
			</p>
		</header>

		<ul class="items items--detail list-unstyled" role="list">
			{#each ensembles as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta meta-label">{item.meta}</p>{/if}
					<p class="item__body">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<EndCta
	title="Une question sur les cours&nbsp;?"
	lede="Nous vous présentons l'école et accompagnons votre choix d'instrument ou d'ensemble."
	cta={{ href: resolve('/contact'), label: 'Contactez-nous' }}
/>

<style>
	.families {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2vw, var(--space-7));
	}

	.family {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
	}

	.family__title {
		color: var(--color-text-secondary);
	}

	.family__items {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		font-family: var(--font-display);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
	}

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
	}

	.item__title {
		font-size: var(--font-size-xl);
		letter-spacing: var(--tracking-tight);
	}

	.item__meta {
		color: var(--color-text-secondary);
	}

	.item__body {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
	}
</style>
