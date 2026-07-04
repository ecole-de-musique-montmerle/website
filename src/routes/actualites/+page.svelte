<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import ActualiteCard from '$lib/components/ActualiteCard.svelte';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import { getRecentActualites, type Actualite } from '$lib/data/actualites';
	import { fetchArticles } from '$lib/services/articles';

	// Données statiques prérendues (pour le SEO et un premier rendu instantané).
	let articles: Actualite[] = getRecentActualites();
	let firestoreError = $state(false);

	onMount(async () => {
		try {
			const live = await fetchArticles();
			if (live.length > 0) {
				articles = [...live].sort((a, b) => b.date.localeCompare(a.date));
			}
		} catch {
			// Hors ligne ou Firestore inaccessible : on conserve les données statiques.
			firestoreError = true;
		}
	});

	const [featured, ...rest] = $derived(articles);
</script>

<svelte:head>
	<title>Actualités | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Vie associative et inscriptions : suivez l'actualité de l'École de Musique 3 Rivières à Montmerle-sur-Saône."
	/>
</svelte:head>

<PageHero
	title="La vie de l'école"
	lede="Inscriptions, ateliers et moments associatifs. Retrouvez les nouvelles de l'École de Musique 3 Rivières."
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
			<ul class="grid list-unstyled" role="list">
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
		max-width: var(--media-max-xl);
		margin-inline: auto;
		margin-block-end: clamp(var(--space-8), 5vw, var(--space-11));
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
</style>
