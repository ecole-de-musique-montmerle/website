<script lang="ts">
	import { resolve } from '$app/paths';
	import ActualiteCard from './ActualiteCard.svelte';
	import Button from './Button.svelte';
	import { getRecentActualites } from '$lib/data/actualites';

	const latest = getRecentActualites(3);
</script>

<section class="news-preview section-surface" aria-labelledby="news-preview-title">
	<div class="container">
		<header class="news-preview__header">
			<div class="news-preview__heading">
				<h2 id="news-preview-title" class="news-preview__title">La vie de l'école</h2>
			</div>
		</header>

		<ul class="news-preview__grid list-unstyled" role="list">
			{#each latest as article (article.slug)}
				<li>
					<ActualiteCard {article} href={resolve(`/actualites/${article.slug}`)} />
				</li>
			{/each}
		</ul>

		<div class="news-preview__cta">
			<Button href={resolve('/actualites')} variant="ghost">Toutes les actualités</Button>
		</div>
	</div>
</section>

<style>
	.news-preview {
		padding-block: var(--section-padding-y);
	}

	.news-preview__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		max-width: var(--measure-2xl);
		margin-block-end: clamp(var(--space-7), 4vw, var(--space-9));
	}

	.news-preview__heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.news-preview__title {
		font-size: var(--font-size-4xl);
		letter-spacing: var(--tracking-tight);
	}

	.news-preview__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
		gap: clamp(var(--space-5), 2.5vw, var(--space-7));
	}

	.news-preview__grid li {
		display: flex;
	}

	.news-preview__grid :global(.card) {
		width: 100%;
	}

	.news-preview__cta {
		display: flex;
		justify-content: center;
		margin-block-start: clamp(var(--space-7), 4vw, var(--space-9));
	}
</style>
