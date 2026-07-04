import { getActualite, getRecentActualites } from '$lib/data/actualites';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getRecentActualites().map((article) => ({ slug: article.slug }));
};

export function load({ params }: { params: { slug: string } }) {
	const article = getActualite(params.slug);
	// On ne lève pas de 404 ici : un article créé uniquement via l'admin
	// (Firestore) ne serait pas prérendu et serait servi via le fallback SPA.
	// La page tente alors une résolution côté client.
	const related = getRecentActualites()
		.filter((a) => a.slug !== params.slug)
		.slice(0, 2);

	return { article: article ?? null, related, slug: params.slug };
}
