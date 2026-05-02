<script lang="ts">
	type Radius = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

	type Props = {
		aspect?: string;
		radius?: Radius;
		label?: string;
	};

	let { aspect = '4 / 3', radius = 'md', label }: Props = $props();
</script>

<div
	class={['placeholder', `placeholder--radius-${radius}`]}
	style:aspect-ratio={aspect}
	role="img"
	aria-label={label ?? 'Visuel à venir'}
></div>

<style>
	.placeholder {
		width: 100%;
		display: block;
		background-color: var(--color-placeholder);
	}

	.placeholder--radius-sm {
		border-radius: var(--radius-sm);
	}

	.placeholder--radius-md {
		border-radius: var(--radius-md);
	}

	.placeholder--radius-lg {
		border-radius: var(--radius-lg);
	}

	.placeholder--radius-xl {
		border-radius: var(--radius-xl);
	}

	.placeholder--radius-2xl {
		border-radius: var(--radius-2xl);
	}
</style>
