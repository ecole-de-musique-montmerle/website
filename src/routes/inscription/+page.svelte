<script lang="ts">
	import { resolve } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import {
		paiementEcheances,
		moyensDePaiement,
		reductions,
		tarifsCoursCollectifs,
		tarifsCoursIndividuels,
		tarifsConditions
	} from '$lib/data/inscription';
</script>

<svelte:head>
	<title>Tarifs et inscription | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Tarifs 2026-2027, modalités d'inscription, échelonnement du paiement, moyens acceptés et réductions de l'École de Musique 3 Rivières."
	/>
</svelte:head>

<PageHero
	title="S'inscrire à l'école"
	lede="Une école associative, des tarifs accessibles, des modalités souples. Nous accompagnons chaque famille dans son inscription."
/>

<section class="page-section page-section--light" aria-labelledby="tarifs">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="tarifs" class="block-title">Tarifs 2026-2027</h2>
			<p class="block-lede">
				Deux tarifs sont appliqués : <strong>tarif 1</strong> pour les habitants de Montmerle-sur-Saône,
				<strong>tarif 2</strong> pour les non-résidents.
			</p>
		</header>

		<div class="tables">
			<div class="table-wrap">
				<h3 class="table-title">Cours collectifs</h3>
				<table class="tarifs-table">
					<thead>
						<tr>
							<th scope="col">Cours</th>
							<th scope="col">Durée</th>
							<th scope="col" class="tarif">Tarif 1</th>
							<th scope="col" class="tarif">Tarif 2</th>
						</tr>
					</thead>
					<tbody>
						{#each tarifsCoursCollectifs as item (item.nom)}
							<tr>
								<td>
									{item.nom}
									{#if item.condition}
										<span class="condition">{item.condition}</span>
									{/if}
								</td>
								<td>{item.duree}</td>
								<td class="tarif">{item.tarif1}</td>
								<td class="tarif">{item.tarif2}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			<div class="table-wrap">
				<h3 class="table-title">Cours individuels</h3>
				<table class="tarifs-table">
					<thead>
						<tr>
							<th scope="col">Cours</th>
							<th scope="col">Durée</th>
							<th scope="col" class="tarif">Tarif 1</th>
							<th scope="col" class="tarif">Tarif 2</th>
						</tr>
					</thead>
					<tbody>
						{#each tarifsCoursIndividuels as item (item.nom)}
							<tr>
								<td>
									{item.nom}
									{#if item.condition}
										<span class="condition">{item.condition}</span>
									{/if}
								</td>
								<td>{item.duree}</td>
								<td class="tarif">{item.tarif1}</td>
								<td class="tarif">{item.tarif2}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<ul class="conditions list-unstyled" role="list">
			{#each tarifsConditions as condition (condition)}
				<li>{condition}</li>
			{/each}
		</ul>

		<p class="disclaimer">
			Le règlement intérieur détaille les conditions d'inscription, de paiement et d'absence.
			<a href={resolve('/reglement-interieur')}>Consulter le règlement intérieur</a>.
		</p>
	</div>
</section>

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
				L'école applique des réductions familiales et utilise les aides locales pour les familles montmerloises.
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

	.tables {
		display: grid;
		gap: clamp(var(--space-6), 4vw, var(--space-9));
	}

	.table-wrap {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.table-title {
		font-size: var(--font-size-xl);
		letter-spacing: var(--tracking-tight);
	}

	.tarifs-table {
		width: 100%;
		border-collapse: collapse;
		font-size: var(--font-size-sm);
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		overflow: hidden;
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
	}

	.tarifs-table th,
	.tarifs-table td {
		padding: var(--space-3) var(--space-4);
		text-align: left;
		border-block-end: var(--border-thin) solid oklch(from var(--color-noir) l c h / 0.08);
	}

	.tarifs-table thead th {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		background-color: var(--color-surface-accent);
		color: var(--color-text-on-dark);
	}

	.tarifs-table tbody tr:last-child td {
		border-block-end: none;
	}

	.tarifs-table td {
		vertical-align: top;
	}

	.tarifs-table td:first-child {
		font-weight: var(--font-weight-medium);
	}

	.tarif {
		text-align: right;
		white-space: nowrap;
	}

	.condition {
		display: block;
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-regular);
		color: var(--color-text-secondary);
		margin-block-start: var(--space-1);
	}

	.conditions {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
		max-width: var(--measure-3xl);
		padding-inline-start: var(--space-5);
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

	.disclaimer a {
		border-block-end: var(--border-thin) solid currentColor;
		transition: color var(--motion-fast) var(--ease-out);
	}

	@media (hover: hover) {
		.disclaimer a:hover {
			color: var(--color-blue);
		}
	}

	@media (max-width: 36rem) {
		.tarifs-table th,
		.tarifs-table td {
			padding: var(--space-2) var(--space-3);
		}
	}
</style>
