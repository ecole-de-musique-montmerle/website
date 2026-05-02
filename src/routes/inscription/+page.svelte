<script lang="ts">
	import { base } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	const paiementEcheances = [
		{ title: 'En une fois', body: 'Au moment de l\'inscription.' },
		{ title: 'En trois fois', body: 'Sur l\'année scolaire, sans frais.' },
		{ title: 'En neuf fois', body: 'Mensuellement, de septembre à mai.' }
	];

	const moyens = [
		'Chèque',
		'Espèces',
		'Chèques vacances',
		'Virement mensuel',
		'Bons CAF'
	];

	const reductions = [
		{
			title: '5 % à partir du 2e élève',
			body: 'Réduction appliquée sur le montant total à partir d\'un second élève inscrit dans la famille.'
		},
		{
			title: '8 % à partir du 3e élève',
			body: 'Réduction renforcée pour les familles nombreuses.'
		},
		{
			title: '5 % pour le 2e instrument',
			body: 'Pour un même élève qui pratique deux instruments à l\'école.'
		},
		{
			title: 'Subvention mairie 50 €',
			body: 'Pour les enfants résidant à Montmerle-sur-Saône, via le ticket sport et culture fourni par l\'école.'
		}
	];
</script>

<svelte:head>
	<title>Tarifs et inscription | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Modalités d'inscription, échelonnement du paiement, moyens acceptés, réductions familiales et subvention mairie de l'École de Musique 3 Rivières."
	/>
</svelte:head>

<PageHero
	eyebrow="Inscription"
	title="S'inscrire à l'école"
	lede="Une école associative, des tarifs accessibles, des modalités souples. Nous accompagnons chaque famille dans son inscription."
/>

<section class="page-section page-section--light" aria-labelledby="paiement">
	<div class="container block">
		<header class="block__header">
			<h2 id="paiement" class="block__title">Échelonnement du paiement</h2>
			<p class="block__lede">
				Le règlement annuel peut être étalé pour s'adapter au budget de chaque famille.
			</p>
		</header>

		<ul class="cards" role="list">
			{#each paiementEcheances as option (option.title)}
				<li class="card">
					<h3 class="card__title">{option.title}</h3>
					<p class="card__body">{option.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="moyens">
	<div class="container block">
		<header class="block__header">
			<h2 id="moyens" class="block__title">Moyens de paiement acceptés</h2>
			<p class="block__lede">
				Plusieurs solutions pour faciliter la prise en charge, y compris via les
				dispositifs d'aide.
			</p>
		</header>

		<ul class="pills" role="list">
			{#each moyens as moyen (moyen)}
				<li class="pill">{moyen}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="reductions">
	<div class="container block">
		<header class="block__header">
			<h2 id="reductions" class="block__title">Réductions et aides</h2>
			<p class="block__lede">
				L'école applique des réductions familiales et bénéficie d'une subvention de la
				mairie pour les enfants montmerlois.
			</p>
		</header>

		<ul class="cards" role="list">
			{#each reductions as reduction (reduction.title)}
				<li class="card">
					<h3 class="card__title">{reduction.title}</h3>
					<p class="card__body">{reduction.body}</p>
				</li>
			{/each}
		</ul>

		<p class="disclaimer">
			Les tarifs détaillés par discipline et durée de cours sont communiqués lors de la
			prise de contact, après validation par l'école.
		</p>
	</div>
</section>

<EndCta
	title="Prêt à inscrire votre élève&nbsp;?"
	lede="Échangez avec nous pour choisir le cours, l'instrument et la formule de paiement adaptés."
	cta={{ href: `${base}/contact`, label: 'Demander une inscription' }}
/>

<style>
	.block {
		display: flex;
		flex-direction: column;
		gap: clamp(var(--space-6), 4vw, var(--space-9));
	}

	.block__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: 56ch;
	}

	.block__title {
		font-size: var(--font-size-4xl);
		letter-spacing: var(--tracking-tight);
	}

	.block__lede {
		font-size: var(--font-size-md);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
		gap: clamp(var(--space-4), 2vw, var(--space-6));
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
	}

	.card__title {
		font-size: var(--font-size-xl);
		letter-spacing: var(--tracking-tight);
	}

	.card__body {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
	}

	.pills {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		list-style: none;
		padding: 0;
		margin: 0;
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
		max-width: 64ch;
		padding-top: var(--space-3);
		border-top: var(--border-thin) solid oklch(from var(--color-noir) l c h / 0.12);
	}
</style>
