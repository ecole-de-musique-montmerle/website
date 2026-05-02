<script lang="ts">
	import Placeholder from './Placeholder.svelte';

	const ensembles = [
		{ name: 'Chorale enfants', label: "Photographie d'une chorale d'enfants" },
		{ name: 'Percussions de rue', label: "Photographie d'un atelier de percussions de rue" },
		{ name: 'Groupe rock ado', label: "Photographie d'un groupe rock ado en répétition" },
		{ name: 'Jazz adulte', label: "Photographie d'un ensemble jazz adulte" }
	];
</script>

<section class="ensembles" aria-labelledby="ensembles-title">
	<div class="container">
		<header class="ensembles__header">
			<h2 id="ensembles-title" class="ensembles__title">Les ensembles</h2>
			<p class="ensembles__lede">
				Quatre formations pour pratiquer ensemble, du premier éveil aux concerts publics.
			</p>
		</header>

		<ul class="ensembles__list" role="list">
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
		background-color: var(--color-surface-secondary);
		color: var(--color-text-primary);
		padding-block: var(--section-padding-y);
		--color-action: var(--color-blue);
		--color-action-text: var(--color-ivoire);
		--color-action-hover: var(--color-blue-deep);
		--color-action-focus: var(--color-blue);
	}

	.ensembles__header {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
		margin-bottom: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.ensembles__title {
		font-size: var(--font-size-5xl);
		max-width: 18ch;
	}

	.ensembles__lede {
		font-size: var(--font-size-md);
		color: var(--color-text-secondary);
		max-width: 48ch;
	}

	.ensembles__list {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(var(--space-4), 2vw, var(--space-6));
		list-style: none;
		padding: 0;
		margin: 0;
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

	@media (max-width: 48rem) {
		.ensembles__list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
