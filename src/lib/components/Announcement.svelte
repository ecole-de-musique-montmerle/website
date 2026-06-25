<script lang="ts">
	import { resolve } from '$app/paths';
	import friendsPhoto from '$lib/assets/photos/friends.webp';
	import Button from './Button.svelte';
</script>

<section class="announcement" aria-labelledby="announcement-title">
	<div class="container announcement__inner">
		<div class="announcement__copy">
			<div class="announcement__text">
				<h2 id="announcement-title" class="announcement__title">
					Les inscriptions de l'année 2026&#8209;2027 se préparent
				</h2>
			</div>
			<Button href={resolve('/contact')}>Contactez-nous</Button>
		</div>
		<div class="announcement__media">
			<img
				class="announcement__photo"
				src={friendsPhoto}
				alt="Deux élèves jouent de la guitare au bord de la Saône"
				width="1920"
				height="1280"
				loading="lazy"
				decoding="async"
			/>
		</div>
	</div>
</section>

<style>
	.announcement {
		background-color: var(--color-surface-primary);
		color: var(--color-text-on-dark);
		padding-block: var(--section-padding-y);
	}

	.announcement__inner {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(var(--space-7), 6vw, var(--space-11));
		align-items: center;
	}

	.announcement__copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
		align-items: flex-start;
	}

	.announcement__text {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.announcement__title {
		font-size: var(--font-size-announcement);
		line-height: var(--line-height-heading);
		letter-spacing: var(--tracking-tight);
		max-width: var(--measure-2xs);
	}

	.announcement__lede {
		font-size: var(--font-size-base);
		line-height: var(--line-height-body);
		max-width: var(--measure-lg);
		color: var(--color-text-on-dark-muted);
	}

	.announcement__media {
		justify-self: end;
		width: 100%;
		max-width: var(--media-max-lg);
	}

	.announcement__photo {
		width: 100%;
		height: auto;
		aspect-ratio: var(--ratio-photo);
		object-fit: cover;
		border-radius: var(--radius-md);
	}

	@media (max-width: 48rem) {
		.announcement__inner {
			grid-template-columns: 1fr;
			gap: var(--space-7);
		}

		.announcement__media {
			justify-self: stretch;
		}
	}
</style>
