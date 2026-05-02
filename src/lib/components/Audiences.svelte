<script lang="ts">
	import girlPhoto from '$lib/assets/photos/girl.png';
	import percussionsPhoto from '$lib/assets/photos/percussions.png';
	import pianoPhoto from '$lib/assets/photos/piano.png';
	import Placeholder from './Placeholder.svelte';

	type Audience = {
		title: string;
		meta: string;
		body: string;
		label: string;
		photo?: { src: string; width: number; height: number };
	};

	const audiences: Audience[] = [
		{
			title: 'Les enfants',
			meta: '4 à 10 ans',
			body: "Éveil musical dès 4 ans, puis premiers cours d'instrument et chorale enfants, au rythme de chacun.",
			label: 'Une jeune élève joue de la guitare acoustique en plein air',
			photo: { src: girlPhoto, width: 1280, height: 1920 }
		},
		{
			title: 'Les ados',
			meta: '11 à 17 ans',
			body: "Cours individuels d'instrument, chant, groupe rock et musiques actuelles à partir de la 3e année.",
			label: 'Mains en train de jouer du piano',
			photo: { src: pianoPhoto, width: 1920, height: 1440 }
		},
		{
			title: 'Les adultes',
			meta: 'Débutants ou reprise',
			body: 'Cours individuels, chant en petit groupe, chorale adulte, percussions de rue et jazz adulte.',
			label: 'Ensemble de percussions de rue défilant en formation',
			photo: { src: percussionsPhoto, width: 1920, height: 1280 }
		}
	];
</script>

<section class="audiences" aria-labelledby="audiences-title">
	<div class="container">
		<header class="audiences__header">
			<h2 id="audiences-title" class="audiences__title">Pour tous les âges</h2>
		</header>

		<ul class="audiences__list" role="list">
			{#each audiences as audience (audience.title)}
				<li class="audiences__item">
					<article class="card">
						<div class="card__head">
							<h3 class="card__title">{audience.title}</h3>
							<p class="card__meta">{audience.meta}</p>
							<p class="card__body">{audience.body}</p>
						</div>
						<div class="card__media">
							{#if audience.photo}
								<img
									class="card__photo"
									src={audience.photo.src}
									alt={audience.label}
									width={audience.photo.width}
									height={audience.photo.height}
									loading="lazy"
									decoding="async"
								/>
							{:else}
								<Placeholder aspect="4 / 3" radius="sm" label={audience.label} />
							{/if}
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.audiences {
		background-color: var(--color-surface-secondary);
		color: var(--color-text-primary);
		padding-block: var(--section-padding-y);
		--color-action: var(--color-blue);
		--color-action-text: var(--color-ivoire);
		--color-action-hover: var(--color-blue-deep);
		--color-action-focus: var(--color-blue);
	}

	.audiences__header {
		margin-bottom: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.audiences__title {
		font-size: var(--font-size-5xl);
		letter-spacing: var(--tracking-tight);
		max-width: 16ch;
	}

	.audiences__list {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(var(--space-5), 3vw, var(--space-8));
		list-style: none;
		padding: 0;
	}

	@media (max-width: 60rem) {
		.audiences__list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 36rem) {
		.audiences__list {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	.audiences__item {
		display: contents;
	}

	.card {
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		padding: clamp(var(--space-5), 2vw, var(--space-7));
		height: 100%;
	}

	.card__head {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.card__title {
		font-size: var(--font-size-2xl);
		letter-spacing: var(--tracking-tight);
	}

	.card__meta {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		color: var(--color-text-secondary);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
	}

	.card__body {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-primary);
	}

	.card__media {
		margin-top: auto;
	}

	.card__photo {
		width: 100%;
		height: auto;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		object-position: center 30%;
		border-radius: var(--radius-sm);
	}
</style>
