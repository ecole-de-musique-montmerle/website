<script lang="ts">
	import { resolve } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import { paiementEcheances, moyensDePaiement, reductions } from '$lib/data/inscription';
</script>

<svelte:head>
	<title>Tarifs et inscription | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Modalités d'inscription, échelonnement du paiement, moyens acceptés, réductions familiales et subvention mairie de l'École de Musique 3 Rivières."
	/>
</svelte:head>

<PageHero
	title="S'inscrire à l'école"
	lede="Une école associative, des tarifs accessibles, des modalités souples. Nous accompagnons chaque famille dans son inscription."
/>

<section class="page-section page-section--light" aria-labelledby="paiement">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="paiement" class="block-title">Échelonnement du paiement</h2>
			<p class="block-lede">
				Le règlement annuel peut être étalé pour s'adapter au budget de chaque famille.
			</p>
		</header>

		<ul class="cards list-unstyled" role="list">
			{#each paiementEcheances as option (option.title)}
				<li class="card-base">
					<h3 class="card-base__title">{option.title}</h3>
					<p class="card-base__body">{option.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="moyens">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="moyens" class="block-title">Moyens de paiement acceptés</h2>
			<p class="block-lede">
				Plusieurs solutions pour faciliter la prise en charge, y compris via les dispositifs d'aide.
			</p>
		</header>

		<ul class="pills list-unstyled" role="list">
			{#each moyensDePaiement as moyen (moyen)}
				<li class="pill">{moyen}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="reductions">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="reductions" class="block-title">Réductions et aides</h2>
			<p class="block-lede">
				L'école applique des réductions familiales et bénéficie d'une subvention de la mairie pour
				les enfants montmerlois.
			</p>
		</header>

		<ul class="cards list-unstyled" role="list">
			{#each reductions as reduction (reduction.title)}
				<li class="card-base">
					<h3 class="card-base__title">{reduction.title}</h3>
					<p class="card-base__body">{reduction.body}</p>
				</li>
			{/each}
		</ul>

		<p class="disclaimer">
			Les tarifs détaillés par discipline et durée de cours sont communiqués lors de la prise de
			contact, après validation par l'école.
		</p>
	</div>
</section>

<EndCta
	title="Prêt à inscrire votre élève&nbsp;?"
	lede="Échangez avec nous pour choisir le cours, l'instrument et la formule de paiement adaptés."
	cta={{ href: resolve('/contact'), label: 'Demander une inscription' }}
/>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
		gap: clamp(var(--space-4), 2vw, var(--space-6));
	}

	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
	}

	.pill {
		font-family: var(--font-body);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		padding: var(--space-2) var(--space-5);
		background-color: var(--color-paper);
		border-radius: var(--radius-pill);
	}

	.disclaimer {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
		max-width: var(--measure-3xl);
		padding-block-start: var(--space-3);
		border-block-start: var(--border-thin) solid
			oklch(from var(--color-noir) l c h / var(--opacity-1));
	}
</style>
