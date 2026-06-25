import { resolve } from '$app/paths';
import type { ResolvedPathname } from '$app/types';

export type NavItem = {
	href: string;
	label: string;
};

/** Liens affichés dans la navigation principale (header). */
export const MAIN_NAV: NavItem[] = [
	{ href: '/cours', label: 'Cours' },
	{ href: '/professeurs', label: 'Professeurs' },
	{ href: '/inscription', label: 'Inscription' },
	{ href: '/actualites', label: 'Actualités' }
];

/** Liens affichés dans le footer (nav secondaire). */
export const FOOTER_NAV: NavItem[] = [
	{ href: '/cours', label: 'Cours' },
	{ href: '/professeurs', label: 'Professeurs' },
	{ href: '/inscription', label: 'Inscription' },
	{ href: '/actualites', label: 'Actualités' },
	{ href: '/contact', label: 'Contact' }
];

/** Liens légaux affichés dans le footer. */
export const LEGAL_NAV: NavItem[] = [
	{ href: '/mentions-legales', label: 'Mentions légales' },
	{ href: '/confidentialite', label: 'Confidentialité' },
	{ href: '/accessibilite', label: 'Accessibilité' }
];

export type ResolvedNavItem = {
	href: ResolvedPathname;
	label: string;
};

/** Résout les chemins d'une liste de navigation avec le base path du site. */
export function resolveNav(items: NavItem[]): ResolvedNavItem[] {
	return items.map((item) => ({
		label: item.label,
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		href: resolve(item.href as any)
	}));
}

export type Social = {
	href: string;
	label: string;
	path: string;
};

export const SOCIALS: Social[] = [
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
