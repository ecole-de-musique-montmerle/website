<script lang="ts">
	import PageHero from '$lib/components/PageHero.svelte';

	const lieux = [
		{
			title: 'Place de la mairie',
			body: 'Salles vertes, à proximité immédiate du centre de Montmerle-sur-Saône.'
		},
		{
			title: 'Salle des chaisiers',
			body: 'Salle dédiée aux ensembles et aux ateliers collectifs.'
		}
	];
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
	<div class="container block">
		<header class="block__header">
			<h2 id="coordonnees" class="block__title">Coordonnées</h2>
		</header>

		<dl class="contact-list">
			<div class="contact-item">
				<dt>Adresse administrative</dt>
				<dd>
					29 rue des Minimes<br />
					01090 Montmerle-sur-Saône
				</dd>
			</div>

			<div class="contact-item">
				<dt>Téléphone</dt>
				<dd>
					<a class="contact-link" href="tel:+33673714699">06 73 71 46 99</a>
					<span class="contact-meta"> Guillemette Bourmeyster, présidente </span>
				</dd>
			</div>

			<div class="contact-item">
				<dt>Courriel</dt>
				<dd>
					<a class="contact-link" href="mailto:ecolemusiquemontmerle3r@gmail.com">
						ecolemusiquemontmerle3r@gmail.com
					</a>
				</dd>
			</div>

			<div class="contact-item">
				<dt>Horaires</dt>
				<dd>Du lundi au samedi, sur rendez-vous.</dd>
			</div>
		</dl>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="lieux">
	<div class="container block">
		<header class="block__header">
			<h2 id="lieux" class="block__title">Lieux des cours</h2>
			<p class="block__lede">
				Les cours se déroulent à Montmerle-sur-Saône, dans deux lieux dédiés au cœur du village.
			</p>
		</header>

		<ul class="cards" role="list">
			{#each lieux as lieu (lieu.title)}
				<li class="card">
					<h3 class="card__title">{lieu.title}</h3>
					<p class="card__body">{lieu.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

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
		border-bottom: var(--border-thin) solid currentColor;
		transition: color var(--motion-fast) var(--ease-out);
	}

	.contact-link:hover {
		color: var(--color-blue);
	}

	.contact-meta {
		display: block;
		margin-top: var(--space-1);
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--tracking-normal);
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
</style>
