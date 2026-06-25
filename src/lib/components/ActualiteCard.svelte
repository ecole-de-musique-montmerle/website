<script lang="ts">
	import type { ResolvedPathname } from '$app/types';
	import type { Actualite } from '$lib/data/actualites';
	import { formatDate } from '$lib/utils/date';

	type Props = {
		article: Actualite;
		href: ResolvedPathname;
		featured?: boolean;
	};

	let { article, href, featured = false }: Props = $props();
</script>

<article class={['card', featured && 'card--featured']} aria-labelledby={`${article.slug}-title`}>
	<a class="card__link" {href}>
		<div class="card__media">
			<img
				class="card__cover"
				src={article.cover.src}
				alt={article.cover.alt}
				width={article.cover.width}
				height={article.cover.height}
				loading="lazy"
				decoding="async"
			/>
		</div>
		<div class="card__body">
			<div class="card__meta">
				<span class="card__category">{article.category}</span>
				<time class="card__date" datetime={article.date}>{formatDate(article.date)}</time>
			</div>
			<h2 id={`${article.slug}-title`} class="card__title">{article.title}</h2>
			<p class="card__excerpt">{article.excerpt}</p>
			<span class="card__readmore">Lire l'article</span>
		</div>
	</a>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background-color: var(--color-paper);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.card__link {
		display: flex;
		flex-direction: column;
		height: 100%;
		color: inherit;
	}

	.card__media {
		width: 100%;
		aspect-ratio: 16 / 10;
		overflow: hidden;
	}

	.card__cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform var(--motion-slow) var(--ease-out);
	}

	.card:hover .card__cover {
		transform: scale(1.04);
	}

	.card__body {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		padding: clamp(var(--space-5), 2vw, var(--space-6));
		flex: 1;
	}

	.card__meta {
		display: flex;
		align-items: center;
		gap: var(--space-3);
		flex-wrap: wrap;
	}

	.card__category {
		font-family: var(--font-body);
		font-size: var(--font-size-2xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		padding: var(--space-1) var(--space-3);
		color: var(--color-noir);
		background-color: var(--color-gold);
		border-radius: var(--radius-pill);
	}

	.card__date {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-secondary);
	}

	.card__title {
		font-size: var(--font-size-xl);
		line-height: var(--line-height-heading);
		letter-spacing: var(--tracking-tight);
	}

	.card__excerpt {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-body);
		color: var(--color-text-secondary);
	}

	.card__readmore {
		margin-top: auto;
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-blue);
		padding-top: var(--space-2);
		border-top: var(--border-thin) solid var(--color-line);
		transition: color var(--motion-fast) var(--ease-out);
	}

	.card:hover .card__readmore {
		color: var(--color-gold-deep);
	}

	.card--featured .card__title {
		font-size: var(--font-size-2xl);
	}

	@media (max-width: 48rem) {
		.card__title {
			font-size: var(--font-size-lg);
		}
	}
</style>
