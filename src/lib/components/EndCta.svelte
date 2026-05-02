<script lang="ts">
	import Button from './Button.svelte';

	type Props = {
		title: string;
		lede?: string;
		cta: { href: string; label: string };
	};

	let { title, lede, cta }: Props = $props();
</script>

<section class="end-cta" aria-labelledby="end-cta-title">
	<div class="container">
		<div class="end-cta__inner">
			<div class="end-cta__copy">
				<h2 id="end-cta-title" class="end-cta__title">{title}</h2>
				{#if lede}
					<p class="end-cta__lede">{lede}</p>
				{/if}
			</div>
			<Button href={cta.href}>{cta.label}</Button>
		</div>
	</div>
</section>

<style>
	.end-cta {
		background-color: var(--color-surface-primary);
		color: var(--color-text-on-dark);
		padding-block: var(--section-padding-y);
	}

	.end-cta__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: clamp(var(--space-6), 4vw, var(--space-10));
		flex-wrap: wrap;
	}

	.end-cta__copy {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
	}

	.end-cta__title {
		font-size: var(--font-size-4xl);
		line-height: var(--line-height-heading);
		letter-spacing: var(--tracking-tight);
	}

	.end-cta__lede {
		font-size: var(--font-size-base);
		line-height: var(--line-height-body);
		color: var(--color-text-on-dark-muted);
		max-width: 56ch;
	}
</style>
