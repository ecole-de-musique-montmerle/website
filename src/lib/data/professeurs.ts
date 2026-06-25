import type { Image } from '$lib/types/image';
import { ETABLISSEMENT } from '$lib/data/etablissement';

export type Professeur = {
	slug: string;
	firstName: string;
	lastName: string;
	disciplines: string[];
	badge?: string;
	bio?: string;
	photo?: Image;
};

export const professeurs: Professeur[] = [
	{
		slug: 'alain-bagard',
		firstName: 'Alain',
		lastName: 'Bagard',
		disciplines: ['Violon', 'Formation musicale']
	},
	{
		slug: 'mireille-chanton',
		firstName: 'Mireille',
		lastName: 'Chanton',
		disciplines: ['Piano', 'Accordéon']
	},
	{
		slug: 'jean-francois-giroud',
		firstName: 'Jean-François',
		lastName: 'Giroud',
		disciplines: ['Flûte', 'Saxophone']
	},
	{
		slug: 'franck-rigaudier',
		firstName: 'Franck',
		lastName: 'Rigaudier',
		disciplines: ['Guitare', 'Chant', 'Formation musicale']
	},
	{
		slug: 'dominique-schweitzer',
		firstName: 'Dominique',
		lastName: 'Schweitzer',
		disciplines: ['Piano']
	},
	{
		slug: 'jean-joly',
		firstName: 'Jean',
		lastName: 'Joly',
		disciplines: ['Batterie', 'Groupe de percussions']
	},
	{
		slug: 'georges-brize',
		firstName: 'Georges',
		lastName: 'Brize',
		disciplines: ['Chant individuel'],
		badge: "Parrain de l'école"
	}
];

/** Construit un intitulé de poste à partir des disciplines. */
export function formatJobTitle(disciplines: string[]): string {
	const lower = disciplines.map((d) => d.toLowerCase());
	if (lower.length === 0) return 'Professeur de musique';
	if (lower.length === 1) return `Professeur de ${lower[0]}`;
	const last = lower[lower.length - 1];
	const head = lower.slice(0, -1).join(', ');
	return `Professeur de ${head} et ${last}`;
}

/** Génère le schéma JSON-LD ItemList pour l'équipe pédagogique. */
export function buildProfesseursSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: "Équipe pédagogique de l'École de Musique 3 Rivières",
		itemListElement: professeurs.map((teacher, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			item: {
				'@type': 'Person',
				name: `${teacher.firstName} ${teacher.lastName}`,
				jobTitle: formatJobTitle(teacher.disciplines),
				knowsAbout: teacher.disciplines,
				worksFor: {
					'@type': 'EducationalOrganization',
					name: ETABLISSEMENT.nom,
					address: {
						'@type': 'PostalAddress',
						streetAddress: ETABLISSEMENT.adresse.rue,
						postalCode: ETABLISSEMENT.adresse.codePostal,
						addressLocality: ETABLISSEMENT.adresse.ville,
						addressCountry: 'FR'
					}
				}
			}
		}))
	};
}
