<script lang="ts">
	import type { Snippet } from 'svelte';

	type Variant = 'primary' | 'ghost';
	type Size = 'sm' | 'md';

	type Props = {
		variant?: Variant;
		size?: Size;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		children: Snippet;
		onclick?: (event: MouseEvent) => void;
	};

	let {
		variant = 'primary',
		size = 'md',
		href,
		type = 'button',
		children,
		onclick
	}: Props = $props();
</script>

{#if href}
	<a class={['btn', `btn--${variant}`, `btn--${size}`]} {href}>
		{@render children()}
	</a>
{:else}
	<button class={['btn', `btn--${variant}`, `btn--${size}`]} {type} {onclick}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2);
		font-family: var(--font-body);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-normal);
		border-radius: var(--radius-pill);
		transition:
			background-color var(--motion-fast) var(--ease-out),
			color var(--motion-fast) var(--ease-out);
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
	}

	.btn--md {
		padding: var(--space-3) var(--space-6);
		font-size: var(--font-size-sm);
	}

	.btn--sm {
		padding: var(--space-2) var(--space-5);
		font-size: var(--font-size-xs);
	}

	.btn--primary {
		background-color: var(--color-action);
		color: var(--color-action-text);
	}

	.btn--primary:hover {
		background-color: var(--color-action-hover);
	}

	.btn--ghost {
		background-color: transparent;
		color: var(--color-action);
		border: var(--border-thin) solid var(--color-action);
	}

	.btn--ghost:hover {
		background-color: var(--color-action);
		color: var(--color-action-text);
	}
</style>
