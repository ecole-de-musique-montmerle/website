<script lang="ts">
	import Placeholder from './Placeholder.svelte';
	import { audiences } from '$lib/data/audiences';
</script>

<section class="audiences section-surface" aria-labelledby="audiences-title">
	<div class="container">
		<header class="audiences__header">
			<h2 id="audiences-title" class="audiences__title">Pour tous les âges</h2>
		</header>

		<ul class="audiences__list list-unstyled" role="list">
			{#each audiences as audience (audience.title)}
				<li class="audiences__item">
					<article class="card">
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
						<div class="card__head">
							<h3 class="card__title">{audience.title}</h3>
							<p class="card__meta meta-label">{audience.meta}</p>
						</div>
					</article>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.audiences {
		padding-block: var(--section-padding-y);
	}

	.audiences__header {
		margin-block-end: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.audiences__title {
		font-size: var(--font-size-5xl);
		letter-spacing: var(--tracking-tight);
		max-width: var(--measure-2xs);
	}

	.audiences__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
		gap: clamp(var(--space-5), 3vw, var(--space-8));
	}

	.audiences__item {
		display: contents;
	}

	.card {
		--card-pad: clamp(var(--space-5), 2vw, var(--space-7));
		display: flex;
		flex-direction: column;
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		overflow: hidden;
		height: 100%;
		box-shadow: 0 1px 3px oklch(from var(--color-noir) l c h / 0.08);
	}

	.card__head {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: var(--card-pad);
	}

	.card__title {
		font-size: var(--font-size-2xl);
		letter-spacing: var(--tracking-tight);
	}

	.card__meta {
		color: var(--color-text-secondary);
	}

	.card__photo {
		width: 100%;
		height: auto;
		aspect-ratio: var(--ratio-photo);
		object-fit: cover;
		object-position: var(--object-pos-portrait);
		border-radius: 0;
	}
</style>
