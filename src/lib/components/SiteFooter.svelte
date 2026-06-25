<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';
	import { FOOTER_NAV, LEGAL_NAV, SOCIALS, resolveNav } from '$lib/data/navigation';
	import { ETABLISSEMENT } from '$lib/data/etablissement';

	const footerLinks = resolveNav(FOOTER_NAV);
	const legalLinks = resolveNav(LEGAL_NAV);
	const currentYear = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="container">
		<div class="site-footer__top">
			<Logo
				href={resolve('/')}
				tone="inherit"
				ariaLabel="École de Musique 3 Rivières, retour à l'accueil"
			/>

			<nav aria-label="Navigation secondaire" class="site-footer__nav">
				<ul class="site-footer__list">
					{#each footerLinks as item (item.href)}
						<li>
							<a class="site-footer__link" href={item.href}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</nav>

			<ul class="site-footer__socials" aria-label="Réseaux sociaux">
				{#each SOCIALS as social (social.label)}
					<li>
						<a
							class="site-footer__social"
							href={social.href}
							target="_blank"
							rel="noopener noreferrer external"
							aria-label={social.label}
						>
							<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
								<path fill="currentColor" d={social.path} />
							</svg>
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="site-footer__rule" role="presentation"></div>

		<div class="site-footer__bottom">
			<address class="site-footer__address">
				{ETABLISSEMENT.adresse.rue}<br />
				{ETABLISSEMENT.adresse.codePostal}
				{ETABLISSEMENT.adresse.ville}
			</address>

			<a class="site-footer__contact" href="mailto:{ETABLISSEMENT.email}">
				{ETABLISSEMENT.email}
			</a>

			<a class="site-footer__contact" href="tel:{ETABLISSEMENT.telephone.intl}">
				{ETABLISSEMENT.telephone.raw}
			</a>
		</div>

		<div class="site-footer__rule" role="presentation"></div>

		<div class="site-footer__legal">
			<p class="site-footer__copyright">
				© {currentYear}
				{ETABLISSEMENT.nomLegal}. {ETABLISSEMENT.forme}.
			</p>

			<nav aria-label="Informations légales" class="site-footer__legal-nav">
				<ul class="site-footer__legal-list">
					{#each legalLinks as item (item.href)}
						<li>
							<a class="site-footer__legal-link" href={item.href}>{item.label}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: var(--color-surface-accent);
		color: var(--color-text-on-dark);
		padding-block: clamp(var(--space-7), 5vw, var(--space-10));
	}

	.site-footer :global(.logo--tone-inherit .logo__mark) {
		color: var(--color-gold);
	}

	.site-footer__top {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: clamp(var(--space-5), 4vw, var(--space-9));
	}

	.site-footer__nav {
		justify-self: start;
	}

	.site-footer__list {
		display: flex;
		flex-wrap: wrap;
		gap: clamp(var(--space-4), 2vw, var(--space-7));
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.site-footer__link {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-medium);
		padding-block: var(--space-2);
		border-bottom: var(--border-thin) solid transparent;
		transition: border-color var(--motion-fast) var(--ease-out);
	}

	.site-footer__link:hover {
		border-bottom-color: currentColor;
	}

	.site-footer__socials {
		display: flex;
		gap: var(--space-3);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.site-footer__social {
		display: inline-grid;
		place-items: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: var(--radius-pill);
		background-color: oklch(from var(--color-ivoire) l c h / 0.12);
		color: currentColor;
		transition:
			background-color var(--motion-fast) var(--ease-out),
			color var(--motion-fast) var(--ease-out);
	}

	.site-footer__social:hover {
		background-color: var(--color-gold);
		color: var(--color-noir);
	}

	.site-footer__social svg {
		width: 1.125rem;
		height: 1.125rem;
	}

	.site-footer__rule {
		height: 1px;
		background-color: oklch(from var(--color-ivoire) l c h / 0.2);
		margin-block: clamp(var(--space-6), 4vw, var(--space-9));
	}

	.site-footer__bottom {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		gap: var(--space-5);
		font-size: var(--font-size-sm);
	}

	.site-footer__address {
		font-style: normal;
		line-height: var(--line-height-body);
	}

	.site-footer__contact {
		justify-self: center;
		border-bottom: var(--border-thin) solid transparent;
		transition: border-color var(--motion-fast) var(--ease-out);
	}

	.site-footer__contact:last-of-type {
		justify-self: end;
	}

	.site-footer__contact:hover {
		border-bottom-color: currentColor;
	}

	.site-footer__legal {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4) var(--space-7);
		font-size: var(--font-size-xs);
		color: oklch(from var(--color-ivoire) l c h / 0.75);
	}

	.site-footer__copyright {
		margin: 0;
	}

	.site-footer__legal-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-5);
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.site-footer__legal-link {
		font-weight: var(--font-weight-medium);
		transition: color var(--motion-fast) var(--ease-out);
	}

	.site-footer__legal-link:hover {
		color: var(--color-ivoire);
	}

	@media (max-width: 48rem) {
		.site-footer__top {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.site-footer__nav {
			justify-self: stretch;
		}

		.site-footer__bottom {
			grid-template-columns: 1fr;
			gap: var(--space-3);
		}

		.site-footer__contact,
		.site-footer__contact:last-of-type {
			justify-self: start;
		}

		.site-footer__legal {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
