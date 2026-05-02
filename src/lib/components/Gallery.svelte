<script lang="ts">
	import Placeholder from './Placeholder.svelte';

	const labels = [
		"Photographie d'un cours de piano",
		"Photographie d'un atelier collectif",
		"Photographie d'une chorale",
		"Photographie d'une audition",
		"Photographie de la vie associative"
	];
</script>

<section class="gallery" aria-label="Galerie photo de l'école">
	<ul class="gallery__list" role="list">
		{#each labels as label, index (label)}
			<li class={['gallery__item', index >= 4 && 'gallery__item--last-on-narrow']}>
				<Placeholder aspect="1 / 1" radius="sm" {label} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.gallery {
		background-color: var(--color-surface-secondary);
		color: var(--color-text-primary);
		padding-block: var(--section-padding-y);
		--color-action: var(--color-blue);
		--color-action-text: var(--color-ivoire);
		--color-action-hover: var(--color-blue-deep);
		--color-action-focus: var(--color-blue);
	}

	.gallery__list {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: clamp(var(--space-3), 1.5vw, var(--space-5));
		padding: 0;
		margin: 0;
		padding-inline: var(--section-padding-x);
		list-style: none;
	}

	.gallery__item {
		min-width: 0;
	}

	@media (max-width: 48rem) {
		.gallery__list {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.gallery__item--last-on-narrow {
			display: none;
		}
	}

	@media (max-width: 32rem) {
		.gallery__list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
