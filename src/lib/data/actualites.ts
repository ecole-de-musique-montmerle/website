import friendsPhoto from '$lib/assets/photos/friends.webp';
import guitarPhoto from '$lib/assets/photos/guitar.webp';
import percussionsPhoto from '$lib/assets/photos/percussions.webp';
import montmerlePhoto from '$lib/assets/photos/montmerle.webp';
import type { Image } from '$lib/types/image';
import { ETABLISSEMENT } from '$lib/data/etablissement';

export { formatDate } from '$lib/utils/date';

export type ActualiteBlock =
	| { type: 'paragraph'; text: string }
	| { type: 'heading'; text: string }
	| { type: 'quote'; text: string; cite?: string };

export type Actualite = {
	slug: string;
	title: string;
	excerpt: string;
	date: string; // ISO YYYY-MM-DD
	category: 'Audition' | 'Concert' | 'Vie associative' | 'Inscriptions';
	cover: Image & { alt: string };
	author: string;
	body: ActualiteBlock[];
	source?: { label: string; href: string };
};

export const actualites: Actualite[] = [
	{
		slug: 'audition-fin-d-annee-2025',
		title: "L'audition de fin d'année clôture l'année à la salle des fêtes",
		excerpt:
			"Élèves, professeurs et familles réunis pour la audition de fin d'année, ouverte sur « Chante bas, chante haut » interprétée par Roméo, parrain de l'école.",
		date: '2025-06-30',
		category: 'Audition',
		cover: {
			src: friendsPhoto,
			width: 1920,
			height: 1280,
			alt: "Élèves de l'École de Musique 3 Rivières lors d'une audition"
		},
		author: ETABLISSEMENT.nom,
		body: [
			{
				type: 'paragraph',
				text: "L'audition de fin d'année s'est tenue à la salle des fêtes de Montmerle-sur-Saône, réunissant les élèves, les professeurs et les familles autour d'un moment de partage musical."
			},
			{
				type: 'paragraph',
				text: "La soirée s'est ouverte sur « Chante bas, chante haut », interprétée par Georges Brize, alias Roméo, parrain de l'école. Une présence forte qui valorise le travail des élèves tout au long de l'année."
			},
			{
				type: 'heading',
				text: 'Une école associative en mouvement'
			},
			{
				type: 'paragraph',
				text: "Auditions, ensembles et chorales rythment la vie de l'école. Ces moments de scène donnent aux élèves, enfants comme adultes, l'occasion de présenter leur travail dans un cadre bienveillant."
			}
		],
		source: {
			label: 'Le Progrès, 30 juin 2025',
			href: 'https://www.leprogres.fr/societe/2025/06/30/l-audition-de-l-ecole-de-musique-cloture-l-annee-a-la-salle-des-fetes'
		}
	},
	{
		slug: 'festival-des-5-a-7-trempl-ain-2025',
		title: 'Le festival « des 5 à 7 » ouvre sa scène aux jeunes talents',
		excerpt:
			"Avec le comité des fêtes, l'école participe au festival et à la scène ouverte Trempl’Ain, dédiée aux jeunes talents de la région.",
		date: '2025-05-28',
		category: 'Concert',
		cover: {
			src: guitarPhoto,
			width: 1920,
			height: 1280,
			alt: "Jeune talent jouant de la guitare lors d'une scène ouverte"
		},
		author: ETABLISSEMENT.nom,
		body: [
			{
				type: 'paragraph',
				text: 'Le festival « des 5 à 7 », organisé avec le comité des fêtes, ouvre sa scène aux jeunes talents à travers la scène ouverte Trempl’Ain.'
			},
			{
				type: 'paragraph',
				text: "Guillemette Bourmeyster, présidente de l'école de musique de Montmerle-sur-Saône, est associée à cette initiative qui valorise la pratique musicale des adolescents et des jeunes adultes."
			},
			{
				type: 'heading',
				text: 'Donner sa chance à la scène'
			},
			{
				type: 'paragraph',
				text: "Ces rendez-vous prolongent le projet pédagogique de l'école : jouer ensemble, monter un répertoire, se confronter au public dans un cadre local et chaleureux."
			}
		],
		source: {
			label: 'Le Progrès, 28 mai 2025',
			href: 'https://www.leprogres.fr/societe/2025/05/28/le-festival-des-5-a-7-ouvre-sa-scene-aux-jeunes-talents'
		}
	},
	{
		slug: 'inscriptions-2026-2027',
		title: 'Les inscriptions 2026-2027 se préparent',
		excerpt:
			"Contactez l'école pour préparer votre rentrée musicale : cours individuels, chorales, éveil musical et ensembles, pour enfants, ados et adultes.",
		date: '2026-06-01',
		category: 'Inscriptions',
		cover: {
			src: percussionsPhoto,
			width: 1920,
			height: 1280,
			alt: "Atelier collectif de percussions de l'École de Musique 3 Rivières"
		},
		author: ETABLISSEMENT.nom,
		body: [
			{
				type: 'paragraph',
				text: "La rentrée 2026-2027 se prépare. L'école accueille les familles, les adolescents et les adultes, débutants ou reprise, pour échanger sur le choix d'un instrument, d'un ensemble ou d'un cours de formation musicale."
			},
			{
				type: 'heading',
				text: "Comment s'inscrire"
			},
			{
				type: 'paragraph',
				text: "Prenez rendez-vous avec l'école, du lundi au samedi. Nous présentons le projet pédagogique, les tarifs, les modalités de paiement (en une, trois ou neuf fois) et les réductions familiales."
			},
			{
				type: 'paragraph',
				text: 'Une subvention de la mairie de Montmerle-sur-Saône est également disponible pour les enfants résidant à Montmerle, via le ticket sport et culture.'
			}
		]
	},
	{
		slug: 'percussions-de-rue-montmerle',
		title: 'Les percussions de rue font résonner Montmerle',
		excerpt:
			'Junior à partir de 8 ans et adulte : les ateliers de percussions de rue portent la musique hors les murs, dans la vie locale de Montmerle-sur-Saône.',
		date: '2026-04-15',
		category: 'Vie associative',
		cover: {
			src: montmerlePhoto,
			width: 1920,
			height: 1280,
			alt: 'Montmerle-sur-Saône et la vie associative locale'
		},
		author: ETABLISSEMENT.nom,
		body: [
			{
				type: 'paragraph',
				text: "Les ateliers de percussions de rue sont l'un des ensembles les plus visibles de l'école. Ils portent la musique hors des salles de cours, dans les rues et les moments festifs de Montmerle-sur-Saône."
			},
			{
				type: 'paragraph',
				text: 'Deux groupes sont proposés : un atelier junior à partir de 8 ans et un atelier adulte, ouvert à tous les niveaux. Encadrés par Jean Joly, ils mêlent percussions traditionnelles et urbaines.'
			},
			{
				type: 'heading',
				text: 'Une pratique collective'
			},
			{
				type: 'paragraph',
				text: "La percussion de rue est une porte d'entrée accessible à la pratique collective : pas de niveau préalable requis, juste l'envie de jouer ensemble et de partager le rythme."
			}
		]
	}
];

export const actualitesBySlug = new Map(actualites.map((a) => [a.slug, a]));

export function getActualite(slug: string): Actualite | undefined {
	return actualitesBySlug.get(slug);
}

export function getRecentActualites(limit?: number): Actualite[] {
	const sorted = [...actualites].sort((a, b) => b.date.localeCompare(a.date));
	return typeof limit === 'number' ? sorted.slice(0, limit) : sorted;
}
