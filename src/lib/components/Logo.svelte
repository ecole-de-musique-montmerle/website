<script lang="ts">
	import type { ResolvedPathname } from '$app/types';

	type Variant = 'horizontal' | 'stacked' | 'mark';
	type Tone = 'accent' | 'inherit';

	type Props = {
		variant?: Variant;
		tone?: Tone;
		href?: ResolvedPathname;
		ariaLabel?: string;
	};

	let {
		variant = 'horizontal',
		tone = 'accent',
		href,
		ariaLabel = 'École de Musique 3 Rivières'
	}: Props = $props();

	const className = $derived(['logo', `logo--${variant}`, `logo--tone-${tone}`]);
</script>

{#snippet body()}
	<span class="logo__mark" aria-hidden="true">
		<svg viewBox="0 0 24 24" focusable="false" role="presentation">
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
			/>
		</svg>
	</span>
	{#if variant !== 'mark'}
		<span class="logo__text">
			<span class="logo__line logo__line--top">École de Musique</span>
			<span class="logo__line logo__line--bottom">3 Rivières</span>
		</span>
	{/if}
{/snippet}

{#if href}
	<a class={className} {href} aria-label={ariaLabel}>
		{@render body()}
	</a>
{:else}
	<span class={className} aria-label={ariaLabel} role="img">
		{@render body()}
	</span>
{/if}

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: var(--space-3);
		color: inherit;
		font-family: var(--font-display);
		line-height: var(--line-height-display);
	}

	.logo__mark {
		display: grid;
		place-items: center;
		flex-shrink: 0;
	}

	.logo__mark svg {
		width: var(--logo-size);
		height: var(--logo-size);
	}

	.logo--tone-accent .logo__mark {
		color: var(--color-gold);
	}

	.logo--tone-inherit .logo__mark {
		color: currentColor;
	}

	.logo__text {
		display: flex;
		flex-direction: column;
		font-weight: var(--font-weight-medium);
		font-size: var(--font-size-sm);
		letter-spacing: var(--tracking-tight);
	}

	.logo__line--top {
		font-size: var(--logo-text);
		color: oklch(from currentColor l c h / var(--opacity-5));
		font-family: var(--font-body);
		font-weight: var(--font-weight-regular);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
	}

	.logo__line--bottom {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-medium);
	}

	.logo--stacked {
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-5);
	}

	.logo--stacked .logo__mark svg {
		width: var(--logo-size-mobile);
		height: var(--logo-size-mobile);
	}

	.logo--stacked .logo__line--bottom {
		font-size: var(--font-size-2xl);
	}
</style>
