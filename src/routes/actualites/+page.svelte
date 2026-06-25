<script lang="ts">
	import { resolve } from '$app/paths';
	import ActualiteCard from '$lib/components/ActualiteCard.svelte';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import { getRecentActualites } from '$lib/data/actualites';

	const articles = getRecentActualites();
	const [featured, ...rest] = articles;
</script>

<svelte:head>
	<title>Actualités | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Auditions, concerts, vie associative et inscriptions : suivez l'actualité de l'École de Musique 3 Rivières à Montmerle-sur-Saône."
	/>
</svelte:head>

<PageHero
	title="La vie de l'école"
	lede="Auditions, concerts, scène ouverte, ateliers et inscriptions. Retrouvez les moments qui font battre l'École de Musique 3 Rivières, à Montmerle-sur-Saône."
/>

<section class="page-section page-section--light" aria-labelledby="actualites-list">
	<div class="container">
		<h2 id="actualites-list" class="visually-hidden">Tous les articles</h2>

		{#if featured}
			<div class="featured">
				<ActualiteCard article={featured} href={resolve(`/actualites/${featured.slug}`)} featured />
			</div>
		{/if}

		{#if rest.length > 0}
			<ul class="grid" role="list">
				{#each rest as article (article.slug)}
					<li>
						<ActualiteCard {article} href={resolve(`/actualites/${article.slug}`)} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

<EndCta
	title="Une question, une info&nbsp;?"
	lede="Contactez l'équipe associative de l'École de Musique 3 Rivières, du lundi au samedi, sur rendez-vous."
	cta={{ href: resolve('/contact'), label: 'Contactez-nous' }}
/>

<style>
	.featured {
		max-width: 48rem;
		margin-inline: auto;
		margin-bottom: clamp(var(--space-8), 5vw, var(--space-11));
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(20rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2.5vw, var(--space-7));
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.grid li {
		display: flex;
	}

	.grid :global(.card) {
		width: 100%;
	}
</style>
