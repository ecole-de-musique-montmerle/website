<script lang="ts">
	import Placeholder from './Placeholder.svelte';
	import { ensembles } from '$lib/data/ensembles';
</script>

<section class="ensembles section-surface" aria-labelledby="ensembles-title">
	<div class="container">
		<header class="ensembles__header">
			<h2 id="ensembles-title" class="ensembles__title">Les ensembles</h2>
		</header>

		<ul class="ensembles__list list-unstyled" role="list">
			{#each ensembles as ensemble (ensemble.name)}
				<li class="ensembles__item">
					<Placeholder aspect="3 / 4" radius="sm" label={ensemble.label} />
					<p class="ensembles__name">{ensemble.name}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.ensembles {
		padding-block: var(--section-padding-y);
	}

	.ensembles__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin-block-end: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.ensembles__title {
		font-size: var(--font-size-5xl);
		max-width: var(--measure-xs);
	}

	.ensembles__list {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
		gap: clamp(var(--space-4), 2vw, var(--space-6));
	}

	.ensembles__item {
		display: flex;
		flex-direction: column;
		gap: var(--space-3);
		min-width: 0;
	}

	.ensembles__name {
		font-family: var(--font-display);
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-medium);
		letter-spacing: var(--tracking-tight);
	}
</style>
