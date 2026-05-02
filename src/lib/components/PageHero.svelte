<script lang="ts">
	type Props = {
		eyebrow?: string;
		title: string;
		lede?: string;
	};

	let { eyebrow, title, lede }: Props = $props();
</script>

<section class="page-hero" aria-labelledby="page-hero-title">
	<div class="container">
		<header class="page-hero__inner">
			{#if eyebrow}
				<p class="page-hero__eyebrow">{eyebrow}</p>
			{/if}
			<h1 id="page-hero-title" class="page-hero__title">{title}</h1>
			{#if lede}
				<p class="page-hero__lede">{lede}</p>
			{/if}
		</header>
	</div>
</section>

<style>
	.page-hero {
		background-color: var(--color-surface-primary);
		color: var(--color-text-on-dark);
		padding-block: clamp(var(--space-9), 5vw, var(--space-12)) var(--section-padding-y);
	}

	.page-hero__inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.page-hero__eyebrow {
		font-family: var(--font-body);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-medium);
		text-transform: uppercase;
		letter-spacing: var(--tracking-wide);
		color: var(--color-text-accent);
	}

	.page-hero__title {
		font-size: var(--font-size-display);
		line-height: var(--line-height-display);
		letter-spacing: var(--tracking-tight);
	}

	.page-hero__lede {
		font-size: var(--font-size-md);
		line-height: var(--line-height-body);
		color: var(--color-text-on-dark-muted);
		max-width: 56ch;
	}
</style>
