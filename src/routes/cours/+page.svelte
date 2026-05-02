<script lang="ts">
	import { base } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';

	const instrumentFamilies = [
		{
			family: 'Claviers',
			items: ['Piano', 'Synthétiseur', 'Accordéon']
		},
		{
			family: 'Cordes',
			items: ['Violon', 'Guitare sèche', 'Guitare électrique', 'Basse']
		},
		{
			family: 'Vents',
			items: ['Saxophone', 'Flûte', 'Trompette']
		},
		{
			family: 'Percussions',
			items: ['Batterie']
		}
	];

	const voix = [
		{ title: 'Chant individuel', meta: 'Tous niveaux' },
		{ title: 'Chant en petit groupe', meta: 'À partir de l’adolescence' },
		{ title: 'Chorale enfants', meta: '4 à 12 ans' },
		{ title: 'Chorale adulte', meta: 'Tous niveaux' }
	];

	const formation = [
		{
			title: 'Solfège',
			body: 'Lecture, rythme, écoute. Les bases de la lecture musicale, en lien avec la pratique instrumentale.'
		},
		{
			title: 'Formation musicale',
			body: 'Rattachée à l’apprentissage d’un instrument, pour faire dialoguer théorie et pratique.'
		},
		{
			title: 'Éveil musical',
			meta: '4 à 7 ans',
			body: 'Premier contact avec le rythme, la voix et les instruments, dans un cadre ludique et collectif.'
		}
	];

	const ensembles = [
		{
			title: 'Percussions de rue junior',
			meta: 'À partir de 8 ans',
			body: 'Atelier collectif de percussions traditionnelles et urbaines.'
		},
		{
			title: 'Percussions de rue adulte',
			body: 'Pratique régulière de percussions en groupe, accessible à tous les niveaux.'
		},
		{
			title: 'Groupe rock et musiques actuelles ado',
			meta: 'À partir de la 3e année d’instrument',
			body: 'Mise en condition de groupe, répertoire pop-rock et musiques actuelles.'
		},
		{
			title: 'Groupe jazz adulte',
			meta: 'À partir de la 3e année d’instrument',
			body: 'Improvisation, standards, lecture jazz, pratique en formation réduite.'
		}
	];
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
	<div class="container block">
		<header class="block__header">
			<h2 id="cours-individuels" class="block__title">Cours individuels</h2>
			<p class="block__lede">
				Pratique instrumentale en face à face avec un professeur, pour découvrir, progresser
				ou reprendre un instrument à son rythme.
			</p>
		</header>

		<div class="families">
			{#each instrumentFamilies as family (family.family)}
				<article class="family">
					<h3 class="family__title">{family.family}</h3>
					<ul class="family__items" role="list">
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
	<div class="container block">
		<header class="block__header">
			<h2 id="voix" class="block__title">Voix et chorales</h2>
			<p class="block__lede">
				Pratique vocale individuelle ou collective, accompagnée par des professeurs
				expérimentés.
			</p>
		</header>

		<ul class="items" role="list">
			{#each voix as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					<p class="item__meta">{item.meta}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="formation">
	<div class="container block">
		<header class="block__header">
			<h2 id="formation" class="block__title">Formation et éveil</h2>
			<p class="block__lede">
				Comprendre la musique, apprendre à lire et à écouter, dès le plus jeune âge.
			</p>
		</header>

		<ul class="items items--detail" role="list">
			{#each formation as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta">{item.meta}</p>{/if}
					<p class="item__body">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<section class="page-section page-section--light" aria-labelledby="ensembles">
	<div class="container block">
		<header class="block__header">
			<h2 id="ensembles" class="block__title">Ensembles et ateliers</h2>
			<p class="block__lede">
				Pratiquer ensemble, monter un répertoire, jouer en concert. Les ensembles sont le
				cœur vivant de l'école.
			</p>
		</header>

		<ul class="items items--detail" role="list">
			{#each ensembles as item (item.title)}
				<li class="item">
					<h3 class="item__title">{item.title}</h3>
					{#if item.meta}<p class="item__meta">{item.meta}</p>{/if}
					<p class="item__body">{item.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<EndCta
	title="Une question sur les cours&nbsp;?"
	lede="Nous vous présentons l'école et accompagnons votre choix d'instrument ou d'ensemble."
	cta={{ href: `${base}/contact`, label: 'Contactez-nous' }}
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
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-secondary);
	}

	.family__items {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		list-style: none;
		padding: 0;
		margin: 0;
		font-family: var(--font-display);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
	}

	.items {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2vw, var(--space-7));
		list-style: none;
		padding: 0;
		margin: 0;
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
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-secondary);
	}

	.item__body {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
	}
</style>
