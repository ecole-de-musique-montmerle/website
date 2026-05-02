<script lang="ts">
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import Logo from './Logo.svelte';

	const navItems = [
		{ href: '/cours', label: 'Cours' },
		{ href: '/professeurs', label: 'Professeurs' },
		{ href: '/inscription', label: 'Inscription' }
	];

	const pathname = $derived(page.url.pathname);
</script>

<header class="site-header">
	<div class="container site-header__inner">
		<Logo
			href="/"
			variant="mark"
			ariaLabel="École de Musique 3 Rivières, retour à l'accueil"
		/>
		<nav aria-label="Navigation principale" class="site-header__nav">
			<ul class="site-header__list">
				{#each navItems as item (item.href)}
					{@const isActive = pathname === item.href}
					<li>
						<a
							class={['site-header__link', isActive && 'site-header__link--active']}
							href={item.href}
							aria-current={isActive ? 'page' : undefined}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<Button href="/contact" size="md">Contactez-nous</Button>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: relative;
		padding-block: var(--space-7);
	}

	.site-header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-6);
	}

	.site-header__nav {
		display: flex;
		align-items: center;
		gap: clamp(var(--space-5), 3vw, var(--space-9));
	}

	.site-header__list {
		display: flex;
		align-items: center;
		gap: clamp(var(--space-4), 2.5vw, var(--space-8));
		list-style: none;
		padding: 0;
	}

	.site-header__link {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: inherit;
		padding-block: var(--space-2);
		border-bottom: var(--border-thin) solid transparent;
		transition: border-color var(--motion-fast) var(--ease-out);
	}

	.site-header__link:hover,
	.site-header__link--active {
		border-bottom-color: var(--color-gold);
	}

	@media (max-width: 48rem) {
		.site-header__list {
			display: none;
		}
	}
</style>
