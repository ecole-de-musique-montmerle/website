<script lang="ts">
	import montmerlePhoto from '$lib/assets/photos/montmerle.webp';
</script>

<section class="story" aria-labelledby="story-title">
	<img
		class="story__bg"
		src={montmerlePhoto}
		alt="Vue de Montmerle-sur-Saône, ses ponts suspendus et la Saône"
		width="3000"
		height="2000"
		loading="lazy"
		decoding="async"
	/>
	<div class="story__overlay"></div>
	<div class="container story__inner">
		<h2 id="story-title" class="story__title">École associative depuis 1997</h2>
	</div>
</section>

<style>
	.story {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		overflow: hidden;
	}

	.story__bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.story__overlay {
		position: absolute;
		inset: 0;
		background-color: oklch(from var(--color-noir) l c h / 0.45);
		z-index: 1;
	}

	.story__inner {
		position: relative;
		z-index: 2;
		text-align: center;
	}

	.story__title {
		font-size: var(--font-size-display);
		line-height: var(--line-height-display);
		letter-spacing: var(--tracking-tight);
		color: var(--color-text-on-dark);
		text-wrap: balance;
	}
</style>
