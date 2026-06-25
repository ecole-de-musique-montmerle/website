<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import Logo from './Logo.svelte';
	import { MAIN_NAV, resolveNav } from '$lib/data/navigation';

	const navItems = resolveNav(MAIN_NAV);
	const pathname = $derived(page.url.pathname);

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}
</script>

<header class="site-header" data-menu-open={menuOpen}>
	<div class="container site-header__inner">
		<Logo
			href={resolve('/')}
			variant="mark"
			ariaLabel="École de Musique 3 Rivières, retour à l'accueil"
		/>

		<nav aria-label="Navigation principale" class="site-header__nav">
			<ul class="site-header__list">
				{#each navItems as item (item.href)}
					{@const isActive = pathname === item.href || pathname === `${item.href}/`}
					<li>
						<a
							class={['site-header__link', isActive && 'site-header__link--active']}
							href={item.href}
							aria-current={isActive ? 'page' : undefined}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<Button href={resolve('/contact')} size="md">Contactez-nous</Button>
		</nav>

		<button
			class="site-header__toggle"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="mobile-nav"
			aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="site-header__toggle-bar"></span>
			<span class="site-header__toggle-bar"></span>
			<span class="site-header__toggle-bar"></span>
		</button>
	</div>

	{#if menuOpen}
		<div class="site-header__mobile" id="mobile-nav">
			<ul class="site-header__mobile-list">
				{#each navItems as item (item.href)}
					{@const isActive = pathname === item.href || pathname === `${item.href}/`}
					<li>
						<a
							class={['site-header__mobile-link', isActive && 'site-header__mobile-link--active']}
							href={item.href}
							aria-current={isActive ? 'page' : undefined}
							onclick={closeMenu}
						>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
			<Button href={resolve('/contact')} size="md" class="site-header__mobile-cta"
				>Contactez-nous</Button
			>
		</div>
	{/if}
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
		margin: 0;
	}

	.site-header__link {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		color: inherit;
		padding-block: var(--space-3);
		border-block-end: var(--border-thin) solid transparent;
		transition: border-color var(--motion-fast) var(--ease-out);
	}

	.site-header__link--active {
		border-bottom-color: var(--color-gold);
	}

	.site-header__toggle {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: var(--space-1);
		width: var(--tap-target);
		height: var(--tap-target);
		padding: var(--space-2);
		background: none;
		border: none;
		cursor: pointer;
	}

	.site-header__toggle-bar {
		display: block;
		height: var(--border-thick);
		background-color: currentColor;
		border-radius: var(--radius-pill);
		transition:
			transform var(--motion-fast) var(--ease-out),
			opacity var(--motion-fast) var(--ease-out);
	}

	.site-header[data-menu-open='true'] .site-header__toggle-bar:nth-child(1) {
		transform: translateY(calc(var(--space-1) + var(--border-thick))) rotate(45deg);
	}

	.site-header[data-menu-open='true'] .site-header__toggle-bar:nth-child(2) {
		opacity: 0;
	}

	.site-header[data-menu-open='true'] .site-header__toggle-bar:nth-child(3) {
		transform: translateY(calc(-1 * (var(--space-1) + var(--border-thick)))) rotate(-45deg);
	}

	.site-header__mobile {
		display: none;
	}

	@media (max-width: 48rem) {
		.site-header__nav {
			display: none;
		}

		.site-header__toggle {
			display: flex;
		}

		.site-header__mobile {
			display: flex;
			flex-direction: column;
			gap: var(--space-5);
			padding-block: var(--space-6) var(--space-8);
			padding-inline: var(--section-padding-x);
			background-color: var(--color-surface-primary);
			color: var(--color-text-on-dark);
			border-block-start: var(--border-thin) solid
				oklch(from var(--color-ivoire) l c h / var(--opacity-1));
		}

		.site-header__mobile-list {
			display: flex;
			flex-direction: column;
			gap: var(--space-2);
			list-style: none;
			padding: 0;
			margin: 0;
		}

		.site-header__mobile-link {
			display: block;
			font-family: var(--font-display);
			font-size: var(--font-size-xl);
			font-weight: var(--font-weight-medium);
			letter-spacing: var(--tracking-tight);
			color: inherit;
			padding-block: var(--space-3);
			border-block-end: var(--border-thin) solid
				oklch(from var(--color-ivoire) l c h / var(--opacity-1));
		}

		.site-header__mobile-link--active {
			color: var(--color-gold);
		}

		.site-header__mobile :global(.btn) {
			align-self: flex-start;
		}
	}

	@media (hover: hover) {
		.site-header__link:hover {
			border-bottom-color: var(--color-gold);
		}
	}
</style>
