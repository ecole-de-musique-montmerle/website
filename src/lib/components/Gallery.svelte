<script lang="ts">
	import guitarPhoto from '$lib/assets/photos/guitar.png';
	import Placeholder from './Placeholder.svelte';

	type GalleryItem = {
		label: string;
		photo?: { src: string; width: number; height: number };
	};

	const items: GalleryItem[] = [
		{
			label: "Gros plan de mains qui jouent d'une guitare acoustique",
			photo: { src: guitarPhoto, width: 1920, height: 1362 }
		},
		{ label: "Photographie d'un cours de piano" },
		{ label: "Photographie d'un atelier collectif" },
		{ label: "Photographie d'une chorale" },
		{ label: "Photographie d'une audition" }
	];
</script>

<section class="gallery" aria-label="Galerie photo de l'école">
	<ul class="gallery__list" role="list">
		{#each items as item, index (item.label)}
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
