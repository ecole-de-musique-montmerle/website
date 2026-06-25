import guitarPhoto from '$lib/assets/photos/guitar.webp';
import pianoPhoto from '$lib/assets/photos/piano.webp';
import percussionsPhoto from '$lib/assets/photos/percussions.webp';
import type { Image } from '$lib/types/image';

export type Instrument = {
	name: string;
	/** Slugs des professeurs qui enseignent cet instrument (vers /professeurs#slug). */
	teachers?: string[];
};

export type InstrumentFamily = {
	family: string;
	blurb: string;
	items: Instrument[];
};

export const instrumentFamilies: InstrumentFamily[] = [
	{
		family: 'Claviers',
		blurb: 'Polyphonie, accompagnement et harmonie, du classique aux musiques actuelles.',
		items: [
			{ name: 'Piano', teachers: ['mireille-chanton', 'dominique-schweitzer'] },
			{ name: 'Synthétiseur' },
			{ name: 'Accordéon', teachers: ['mireille-chanton'] }
		]
	},
	{
		family: 'Cordes',
		blurb: 'Du frotté au pincé, timbres chaleureux et répertoires classique, folk et rock.',
		items: [
			{ name: 'Violon', teachers: ['alain-bagard'] },
			{ name: 'Guitare sèche', teachers: ['franck-rigaudier'] },
			{ name: 'Guitare électrique', teachers: ['franck-rigaudier'] },
			{ name: 'Basse' }
		]
	},
	{
		family: 'Vents',
		blurb: 'Souffle, expressivité et phrasé, du classique au jazz.',
		items: [
			{ name: 'Saxophone', teachers: ['jean-francois-giroud'] },
			{ name: 'Flûte', teachers: ['jean-francois-giroud'] },
			{ name: 'Trompette' }
		]
	},
	{
		family: 'Percussions',
		blurb: 'Rythme, coordination et énergie, en cours individuel comme en batterie de rue.',
		items: [{ name: 'Batterie', teachers: ['jean-joly'] }]
	}
];

export type CoursItem = {
	title: string;
	meta?: string;
	body?: string;
	/** Slugs des professeurs associés (vers /professeurs#slug). */
	teachers?: string[];
};

export const voix: CoursItem[] = [
	{
		title: 'Chant individuel',
		meta: 'Tous niveaux',
		body: 'Travail vocal personnalisé : posture, respiration, justesse et interprétation, du répertoire de votre choix.',
		teachers: ['georges-brize']
	},
	{
		title: 'Chant en petit groupe',
		meta: 'À partir de l’adolescence',
		body: 'Pratique vocale collective, harmonies et répertoire, dans un cadre bienveillant et créatif.',
		teachers: ['franck-rigaudier']
	},
	{
		title: 'Chorale enfants',
		meta: '4 à 12 ans',
		body: 'Premier plaisir de chanter ensemble, jeux vocaux et répertoire accessible, sans lecture préalable.'
	},
	{
		title: 'Chorale adulte',
		meta: 'Tous niveaux',
		body: 'Répertoire varié chanté à plusieurs voix, ouverte aux débutants comme aux choristes confirmés.'
	}
];

export const formation: CoursItem[] = [
	{
		title: 'Solfège',
		body: 'Lecture, rythme, écoute. Les bases de la lecture musicale, en lien avec la pratique instrumentale.'
	},
	{
		title: 'Formation musicale',
		body: "Rattachée à l'apprentissage d'un instrument, pour faire dialoguer théorie et pratique."
	},
	{
		title: 'Éveil musical',
		meta: '4 à 7 ans',
		body: 'Premier contact avec le rythme, la voix et les instruments, dans un cadre ludique et collectif.'
	}
];

export const ensembles: CoursItem[] = [
	{
		title: 'Percussions de rue junior',
		meta: 'À partir de 8 ans',
		body: 'Atelier collectif de percussions traditionnelles et urbaines, défilés et interventions en ville.',
		teachers: ['jean-joly']
	},
	{
		title: 'Percussions de rue adulte',
		body: 'Pratique régulière de percussions en groupe, accessible à tous les niveaux, scène ouverte.',
		teachers: ['jean-joly']
	},
	{
		title: 'Groupe rock et musiques actuelles ado',
		meta: 'À partir de la 3e année d’instrument',
		body: 'Mise en condition de groupe, répertoire pop-rock et musiques actuelles, travail du répertoire et de la scène.'
	},
	{
		title: 'Groupe jazz adulte',
		meta: 'À partir de la 3e année d’instrument',
		body: 'Improvisation, standards, lecture jazz, pratique en formation réduite.'
	}
];

export type ParcoursStep = {
	step: string;
	title: string;
	age?: string;
	body: string;
};

/** Parcours pédagogique type, de l'éveil à la scène. */
export const parcours: ParcoursStep[] = [
	{
		step: '01',
		title: 'Éveil musical',
		age: '4 à 7 ans',
		body: 'Premier contact ludique avec le rythme, la voix et les sons, en groupe.'
	},
	{
		step: '02',
		title: 'Premier instrument',
		age: 'À partir de 7 ans',
		body: "Choix d'un instrument en cours individuel, progression au rythme de chacun."
	},
	{
		step: '03',
		title: 'Formation musicale',
		body: 'Lecture, rythme et écoute, en lien direct avec la pratique instrumentale.'
	},
	{
		step: '04',
		title: 'Pratique d’ensemble',
		body: 'Chorale, percussions de rue, groupe rock ou jazz : jouer avec les autres.'
	},
	{
		step: '05',
		title: 'Scène et auditions',
		body: "Auditions de fin d'année, scène ouverte Trempl’Ain et concerts de l’école."
	}
];

/** Visuels illustrant les grandes familles de pratiques. */
export const coursVisuels: { instruments: Image; voix: Image; ensembles: Image } = {
	instruments: {
		src: guitarPhoto,
		width: 1280,
		height: 1920,
		alt: 'Une élève joue de la guitare acoustique en plein air'
	},
	voix: { src: pianoPhoto, width: 1920, height: 1440, alt: 'Mains en train de jouer du piano' },
	ensembles: {
		src: percussionsPhoto,
		width: 1920,
		height: 1280,
		alt: 'Ensemble de percussions de rue défilant en formation'
	}
};
