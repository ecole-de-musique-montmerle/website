<script lang="ts">
	import heroPhoto from '$lib/assets/photos/photo_1.webp';
</script>

<section class="hero" aria-labelledby="hero-title">
	<div class="container">
		<div class="hero__copy">
			<h1 id="hero-title" class="hero__title">Apprendre, jouer, partager.</h1>
			<p class="hero__lede">
				L'École de Musique 3 Rivières accueille enfants, ados et adultes à Montmerle-sur-Saône.
				Cours individuels, chorales et ensembles, depuis 1997.
			</p>
		</div>
		<div class="hero__media">
			<img
				class="hero__photo"
				src={heroPhoto}
				alt="Élèves de l'École de Musique 3 Rivières en pratique"
				width="1920"
				height="1280"
				loading="eager"
				decoding="async"
				fetchpriority="high"
			/>
		</div>
	</div>
</section>

<style>
	.hero {
		background-color: var(--color-surface-primary);
		color: var(--color-text-on-dark);
		padding-block: clamp(var(--space-9), 5vw, var(--space-12)) var(--space-11);
	}

	.hero .container {
		display: grid;
		gap: clamp(var(--space-7), 6vw, var(--space-11));
	}

	.hero__copy {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
		gap: clamp(var(--space-6), 6vw, var(--space-11));
		align-items: end;
	}

	.hero__title {
		font-size: var(--font-size-display);
		line-height: var(--line-height-display);
		letter-spacing: var(--tracking-tight);
		max-width: 16ch;
	}

	.hero__lede {
		font-size: var(--font-size-md);
		line-height: var(--line-height-body);
		max-width: 32ch;
		color: var(--color-text-on-dark-muted);
	}

	.hero__photo {
		width: 100%;
		height: auto;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: var(--radius-md);
	}

	@media (max-width: 48rem) {
		.hero__copy {
			grid-template-columns: 1fr;
			gap: var(--space-6);
			align-items: start;
		}

		.hero__lede {
			max-width: 48ch;
		}
	}
</style>
