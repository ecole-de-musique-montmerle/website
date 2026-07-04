<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';
	import { lieux } from '$lib/data/contact';
	import { ETABLISSEMENT } from '$lib/data/etablissement';
</script>

<svelte:head>
	<title>Contact | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Coordonnées, lieux des cours et horaires de l'École de Musique 3 Rivières à Montmerle-sur-Saône. Sur rendez-vous, du lundi au samedi."
	/>
</svelte:head>

<PageHero
	title="Parlons de votre projet musical"
	lede="Sur rendez-vous, du lundi au samedi, à Montmerle-sur-Saône. Une équipe associative à l'écoute des familles, des ados et des adultes."
/>

<section class="page-section page-section--light" aria-labelledby="coordonnees">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="coordonnees" class="block-title">Coordonnées</h2>
		</header>

		<dl class="contact-list">
			<div class="contact-item">
				<dt>Adresse administrative</dt>
				<dd>
					{ETABLISSEMENT.adresse.rue}<br />
					{ETABLISSEMENT.adresse.codePostal}
					{ETABLISSEMENT.adresse.ville}
				</dd>
			</div>

			<div class="contact-item">
				<dt>Téléphone</dt>
				<dd>
					{#each ETABLISSEMENT.telephones as phone, index (phone.intl)}
						<a class="contact-link" href="tel:{phone.intl}">
							{phone.raw}
						</a>{#if index < ETABLISSEMENT.telephones.length - 1}<span class="contact-meta"> / </span>{/if}
					{/each}
					<span class="contact-meta"> {ETABLISSEMENT.direction.full} </span>
				</dd>
			</div>

			<div class="contact-item">
				<dt>Courriel</dt>
				<dd>
					<a class="contact-link" href="mailto:{ETABLISSEMENT.email}">
						{ETABLISSEMENT.email}
					</a>
				</dd>
			</div>

			<div class="contact-item">
				<dt>Horaires</dt>
				<dd>{ETABLISSEMENT.horaires}</dd>
			</div>
		</dl>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="lieux">
	<div class="container block-stack">
		<header class="block-header">
			<h2 id="lieux" class="block-title">Lieux des cours</h2>
			<p class="block-lede">
				Les cours se déroulent à Montmerle-sur-Saône, dans deux lieux dédiés au cœur du village.
			</p>
		</header>

		<ul class="cards list-unstyled" role="list">
			{#each lieux as lieu (lieu.title)}
				<li class="card-base">
					<h3 class="card-base__title">{lieu.title}</h3>
					<p class="card-base__body">{lieu.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.contact-list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
		gap: clamp(var(--space-5), 3vw, var(--space-8));
		margin: 0;
	}

	.contact-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.contact-item dt {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-secondary);
	}

	.contact-item dd {
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
		line-height: var(--line-height-heading);
	}

	.contact-link {
		border-block-end: var(--border-thin) solid currentColor;
		transition: color var(--motion-fast) var(--ease-out);
	}

	.contact-meta {
		display: block;
		margin-block-start: var(--space-1);
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--tracking-normal);
		color: var(--color-text-secondary);
	}

	@media (hover: hover) {
		.contact-link:hover {
			color: var(--color-blue);
		}
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
		gap: clamp(var(--space-4), 2vw, var(--space-6));
	}
</style>
