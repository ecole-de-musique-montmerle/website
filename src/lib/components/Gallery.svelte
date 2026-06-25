<script lang="ts">
	import Placeholder from './Placeholder.svelte';
	import { galleryItems } from '$lib/data/gallery';
</script>

<section class="gallery section-surface" aria-label="Galerie photo de l'école">
	<ul class="gallery__list list-unstyled" role="list">
		{#each galleryItems as item, index (item.label)}
			<li class={['gallery__item', index >= 4 && 'gallery__item--last-on-narrow']}>
				{#if item.photo}
					<img
						class="gallery__photo"
						src={item.photo.src}
						alt={item.label}
						width={item.photo.width}
						height={item.photo.height}
						loading="lazy"
						decoding="async"
					/>
				{:else}
					<Placeholder aspect="1 / 1" radius="sm" label={item.label} />
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	.gallery {
		padding-block: var(--section-padding-y);
	}

	.gallery__list {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: clamp(var(--space-3), 1.5vw, var(--space-5));
		padding-inline: var(--section-padding-x);
	}

	.gallery__item {
		min-width: 0;
	}

	.gallery__photo {
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: var(--radius-sm);
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
