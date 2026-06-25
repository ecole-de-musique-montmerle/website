<script lang="ts">
	import { resolve } from '$app/paths';
	import Logo from './Logo.svelte';

	const footerLinks = [
		{ href: resolve('/cours'), label: 'Cours' },
		{ href: resolve('/professeurs'), label: 'Professeurs' },
		{ href: resolve('/inscription'), label: 'Inscription' },
		{ href: resolve('/actualites'), label: 'Actualités' },
		{ href: resolve('/contact'), label: 'Contact' }
	];

	const legalLinks = [
		{ href: resolve('/mentions-legales'), label: 'Mentions légales' },
		{ href: resolve('/confidentialite'), label: 'Confidentialité' },
		{ href: resolve('/accessibilite'), label: 'Accessibilité' }
	];

	const currentYear = new Date().getFullYear();

	const socials = [
		{
			href: 'https://www.facebook.com/ecolemusique3rivieres/',
			label: "Suivre l'École de Musique 3 Rivières sur Facebook",
			path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.13 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22c4.78-.81 8.44-4.94 8.44-9.94Z'
		},
		{
			href: 'https://www.instagram.com/',
			label: 'Suivre sur Instagram',
			path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.43.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.43.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.89 3.7 3.7 0 0 1-.89-1.38c-.17-.43-.37-1.06-.42-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.43-.17 1.06-.37 2.23-.42 1.27-.06 1.65-.07 4.85-.07ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.91.33 4.14.63a5.86 5.86 0 0 0-2.13 1.38A5.86 5.86 0 0 0 .63 4.14C.33 4.91.13 5.78.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.06 1.27.26 2.14.56 2.91a5.86 5.86 0 0 0 1.38 2.13 5.86 5.86 0 0 0 2.13 1.38c.77.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.14-.26 2.91-.56a5.86 5.86 0 0 0 2.13-1.38 5.86 5.86 0 0 0 1.38-2.13c.3-.77.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.14-.56-2.91a5.86 5.86 0 0 0-1.38-2.13A5.86 5.86 0 0 0 19.86.63c-.77-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z'
		}
	];
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
				{#each socials as social (social.label)}
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
				29 rue des Minimes<br />
				01090 Montmerle-sur-Saône
			</address>

			<a class="site-footer__contact" href="mailto:ecolemusiquemontmerle3r@gmail.com">
				ecolemusiquemontmerle3r@gmail.com
			</a>

			<a class="site-footer__contact" href="tel:+33673714699"> 06 73 71 46 99 </a>
		</div>

		<div class="site-footer__rule" role="presentation"></div>

		<div class="site-footer__legal">
			<p class="site-footer__copyright">
				© {currentYear} École de Musique 3 Rivières (AFDCM). Association loi 1901.
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
