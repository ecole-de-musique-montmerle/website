<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import { articlesReglement } from '$lib/data/reglement';
</script>

<svelte:head>
	<title>Règlement intérieur | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Règlement intérieur de l'École de Musique 3 Rivières : inscriptions, paiements, absences, responsabilités et règles de vie associative."
	/>
	<meta name="robots" content="index, follow" />
</svelte:head>

<PageHero
	title="Règlement intérieur"
	lede="Les règles de fonctionnement de l'école, pour une année musicale sereine et partagée."
/>

<section class="page-section page-section--light" aria-label="Contenu du règlement intérieur">
	<div class="container">
		<article class="prose">
			<p class="prose__updated">Mise à jour : juillet 2026 — saison 2026-2027</p>

			{#each articlesReglement as article (article.numero)}
				<section class="prose__section" aria-labelledby="article-{article.numero}">
					<h3 id="article-{article.numero}">
						Article {article.numero}{article.titre ? ` — ${article.titre}` : ''}
					</h3>
					<p>{article.contenu}</p>
				</section>
			{/each}
		</article>
	</div>
</section>
