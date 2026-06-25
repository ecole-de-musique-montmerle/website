import guitarPhoto from '$lib/assets/photos/guitar.webp';
import type { Image } from '$lib/types/image';

export type GalleryItem = {
	label: string;
	photo?: Image;
};

export const galleryItems: GalleryItem[] = [
	{
		label: "Gros plan de mains qui jouent d'une guitare acoustique",
		photo: { src: guitarPhoto, width: 1920, height: 1362 }
	},
	{ label: "Photographie d'un cours de piano" },
	{ label: "Photographie d'un atelier collectif" },
	{ label: "Photographie d'une chorale" },
	{ label: "Photographie d'une audition" }
];
