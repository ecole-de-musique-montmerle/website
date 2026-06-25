import girlPhoto from '$lib/assets/photos/girl.webp';
import percussionsPhoto from '$lib/assets/photos/percussions.webp';
import pianoPhoto from '$lib/assets/photos/piano.webp';
import type { Image } from '$lib/types/image';

export type Audience = {
	title: string;
	meta: string;
	body: string;
	label: string;
	photo?: Image;
};

export const audiences: Audience[] = [
	{
		title: 'Les enfants',
		meta: '4 à 10 ans',
		body: "Éveil musical dès 4 ans, puis premiers cours d'instrument et chorale enfants, au rythme de chacun.",
		label: 'Une jeune élève joue de la guitare acoustique en plein air',
		photo: { src: girlPhoto, width: 1280, height: 1920 }
	},
	{
		title: 'Les ados',
		meta: '11 à 17 ans',
		body: "Cours individuels d'instrument, chant, groupe rock et musiques actuelles à partir de la 3e année.",
		label: 'Mains en train de jouer du piano',
		photo: { src: pianoPhoto, width: 1920, height: 1440 }
	},
	{
		title: 'Les adultes',
		meta: 'Débutants ou reprise',
		body: 'Cours individuels, chant en petit groupe, chorale adulte, percussions de rue et jazz adulte.',
		label: 'Ensemble de percussions de rue défilant en formation',
		photo: { src: percussionsPhoto, width: 1920, height: 1280 }
	}
];
