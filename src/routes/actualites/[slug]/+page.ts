import { error } from '@sveltejs/kit';
import { getActualite, getRecentActualites } from '$lib/data/actualites';
import type { EntryGenerator } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getRecentActualites().map((article) => ({ slug: article.slug }));
};

export function load({ params }: { params: { slug: string } }) {
	const article = getActualite(params.slug);
	if (!article) {
		throw error(404, 'Article introuvable');
	}

	const related = getRecentActualites()
		.filter((a) => a.slug !== article.slug)
		.slice(0, 2);

	return { article, related };
}
