<script lang="ts">
	import { resolve } from '$app/paths';
	import EndCta from '$lib/components/EndCta.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import Placeholder from '$lib/components/Placeholder.svelte';
	import { professeurs, buildProfesseursSchema } from '$lib/data/professeurs';

	const personSchema = buildProfesseursSchema();
	const schemaJson = JSON.stringify(personSchema).replace(/<\/script/gi, '<\\/script');
	const ldJson = `<script type="application/ld+json">${schemaJson}${'</' + 'script>'}`;
</script>

<svelte:head>
	<title>Professeurs | École de Musique 3 Rivières</title>
	<meta
		name="description"
		content="Sept professeurs de l'École de Musique 3 Rivières à Montmerle-sur-Saône : Alain Bagard, Mireille Chanton, Jean-François Giroud, Franck Rigaudier, Dominique Schweitzer, Jean Joly et Georges Brize, parrain de l'école."
	/>

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD schema, contenu entièrement contrôlé -->
	{@html ldJson}
</svelte:head>

<PageHero
	title="Sept professeurs, une école"
	lede="Une équipe stable et expérimentée, formée autour des cours individuels, du chant et des ensembles. Chaque enseignant suit ses élèves dans la durée."
/>

<section class="page-section page-section--light" aria-label="Liste des professeurs">
	<div class="container">
		<div class="teachers">
			{#each professeurs as teacher, i (teacher.slug)}
				<article
					id={teacher.slug}
					class={['teacher', i % 2 === 1 && 'teacher--reverse']}
					aria-labelledby={`${teacher.slug}-name`}
				>
					<div class="teacher__media">
						{#if teacher.photo}
							<img
								class="teacher__photo"
								src={teacher.photo.src}
								alt={`Portrait de ${teacher.firstName} ${teacher.lastName}`}
								width={teacher.photo.width}
								height={teacher.photo.height}
								loading="lazy"
								decoding="async"
							/>
						{:else}
							<Placeholder
								aspect="3 / 4"
								radius="sm"
								label={`Portrait de ${teacher.firstName} ${teacher.lastName} à venir`}
							/>
						{/if}
					</div>

					<div class="teacher__body">
						<ul class="teacher__disciplines list-unstyled" role="list">
							{#each teacher.disciplines as discipline (discipline)}
								<li class="teacher__discipline">{discipline}</li>
							{/each}
						</ul>
						<h2 id={`${teacher.slug}-name`} class="teacher__name">
							{teacher.firstName}
							{teacher.lastName}
						</h2>
						{#if teacher.badge}
							<p class="teacher__badge">{teacher.badge}</p>
						{/if}
						<p class="teacher__bio">
							{#if teacher.bio}
								{teacher.bio}
							{:else}
								Photographie et présentation détaillée à venir, après validation par l'école.
							{/if}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<EndCta
	title="Envie de rencontrer l'équipe&nbsp;?"
	lede="Sur rendez-vous, du lundi au samedi, à Montmerle-sur-Saône."
	cta={{ href: resolve('/contact'), label: 'Prendre contact' }}
/>

<style>
	.teachers {
		display: flex;
		flex-direction: column;
		gap: clamp(var(--space-9), 6vw, var(--space-12));
	}

	.teacher {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
		gap: clamp(var(--space-6), 5vw, var(--space-10));
		align-items: center;
		scroll-margin-top: var(--space-8);
	}

	.teacher--reverse {
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
	}

	.teacher--reverse .teacher__media {
		order: 2;
	}

	.teacher__media {
		max-width: 26rem;
	}

	.teacher__photo {
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 4;
		object-fit: cover;
		border-radius: var(--radius-sm);
	}

	.teacher__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: 56ch;
	}

	.teacher__disciplines {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
	}

	.teacher__discipline {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		padding: var(--space-1) var(--space-3);
		border: var(--border-thin) solid oklch(from var(--color-noir) l c h / 0.18);
		border-radius: var(--radius-pill);
		color: var(--color-text-secondary);
	}

	.teacher__name {
		font-size: var(--font-size-4xl);
		line-height: var(--line-height-heading);
		letter-spacing: var(--tracking-tight);
	}

	.teacher__badge {
		display: inline-flex;
		align-self: flex-start;
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
		padding: var(--space-1) var(--space-3);
		color: var(--color-noir);
		background-color: var(--color-gold);
		border-radius: var(--radius-pill);
	}

	.teacher__bio {
		font-size: var(--font-size-base);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	@media (max-width: 48rem) {
		.teacher,
		.teacher--reverse {
			grid-template-columns: 1fr;
			gap: var(--space-5);
		}

		.teacher--reverse .teacher__media {
			order: 0;
		}

		.teacher__media {
			max-width: 22rem;
		}
	}
</style>
