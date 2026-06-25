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
						<div class="card__head">
							<h3 class="card__title">{audience.title}</h3>
							<p class="card__meta meta-label">{audience.meta}</p>
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
		padding-block: var(--section-padding-y);
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
		--card-pad: clamp(var(--space-5), 2vw, var(--space-7));
		display: flex;
		flex-direction: column;
		gap: var(--space-6);
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		overflow: hidden;
		height: 100%;
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
		border-radius: 0;
	}
</style>
