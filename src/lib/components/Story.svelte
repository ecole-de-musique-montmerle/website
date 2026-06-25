<script lang="ts">
	import { resolve } from '$app/paths';
	import montmerlePhoto from '$lib/assets/photos/montmerle.webp';
	import Button from './Button.svelte';
</script>

<section class="story section-surface" aria-labelledby="story-title">
	<div class="container">
		<h2 id="story-title" class="story__title">Une école associative depuis 1997</h2>

		<div class="story__grid">
			<div class="story__media">
				<img
					class="story__photo"
					src={montmerlePhoto}
					alt="Vue de Montmerle-sur-Saône, ses ponts suspendus et la Saône, où l'école est ancrée depuis 1997"
					width="3000"
					height="2000"
					loading="lazy"
					decoding="async"
				/>
			</div>

			<div class="story__copy">
				<div class="story__text">
					<p>
						L'École de Musique 3 Rivières est une association déclarée en 1997, ancrée à
						Montmerle-sur-Saône, dans l'Ain. Elle réunit une équipe de professeurs expérimentés
						autour d'un projet simple&nbsp;: rendre la musique accessible à toutes et tous, sans
						intimidation ni élitisme.
					</p>

					<p>
						L'école accueille les débutants comme les musiciens en reprise, les enfants dès 4 ans,
						les ados et les adultes. Cours individuels, chorales, ensembles rock et jazz&nbsp;:
						chacun trouve sa pratique et son rythme, soutenu par la vie associative et l'ancrage
						local.
					</p>
				</div>

				<Button href={resolve('/inscription')}>Rejoindre l'école</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.story {
		padding-block: var(--section-padding-y);
	}

	.story__title {
		font-size: var(--font-size-5xl);
		max-width: 18ch;
		margin-bottom: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.story__grid {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.3fr);
		gap: clamp(var(--space-6), 5vw, var(--space-10));
		align-items: start;
	}

	.story__photo {
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: var(--radius-sm);
	}

	.story__copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		align-items: flex-start;
		max-width: 56ch;
		font-size: var(--font-size-base);
		line-height: var(--line-height-body);
	}

	.story__text {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	@media (max-width: 48rem) {
		.story__grid {
			grid-template-columns: 1fr;
		}
	}
</style>
