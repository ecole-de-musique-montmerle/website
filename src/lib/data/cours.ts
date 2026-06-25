export type InstrumentFamily = {
	family: string;
	items: string[];
};

export const instrumentFamilies: InstrumentFamily[] = [
	{
		family: 'Claviers',
		items: ['Piano', 'Synthétiseur', 'Accordéon']
	},
	{
		family: 'Cordes',
		items: ['Violon', 'Guitare sèche', 'Guitare électrique', 'Basse']
	},
	{
		family: 'Vents',
		items: ['Saxophone', 'Flûte', 'Trompette']
	},
	{
		family: 'Percussions',
		items: ['Batterie']
	}
];

export type CoursItem = {
	title: string;
	meta?: string;
	body?: string;
};

export const voix: CoursItem[] = [
	{ title: 'Chant individuel', meta: 'Tous niveaux' },
	{ title: 'Chant en petit groupe', meta: 'À partir de l’adolescence' },
	{ title: 'Chorale enfants', meta: '4 à 12 ans' },
	{ title: 'Chorale adulte', meta: 'Tous niveaux' }
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
		body: 'Atelier collectif de percussions traditionnelles et urbaines.'
	},
	{
		title: 'Percussions de rue adulte',
		body: 'Pratique régulière de percussions en groupe, accessible à tous les niveaux.'
	},
	{
		title: 'Groupe rock et musiques actuelles ado',
		meta: 'À partir de la 3e année d’instrument',
		body: 'Mise en condition de groupe, répertoire pop-rock et musiques actuelles.'
	},
	{
		title: 'Groupe jazz adulte',
		meta: 'À partir de la 3e année d’instrument',
		body: 'Improvisation, standards, lecture jazz, pratique en formation réduite.'
	}
];
