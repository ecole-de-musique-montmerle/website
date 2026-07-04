// Service Firestore pour les articles d'actualité.
// Les articles sont stockés dans la collection `articles`, identifiés par
// leur slug (doc id = slug). Le type `Actualite` est entièrement
// sérialisable en JSON et correspond au format attendu par les composants
// publics (ActualiteCard, page article).
import {
	collection,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	setDoc,
	deleteDoc,
	query,
	orderBy,
	serverTimestamp
} from 'firebase/firestore';
import { db, ARTICLES_COLLECTION } from '$lib/firebase';
import type { Actualite } from '$lib/data/actualites';

/** Article tel que stocké dans Firestore (avec timestamps serveur). */
export type StoredArticle = Actualite & {
	updatedAt?: unknown;
	createdAt?: unknown;
};

/** Abonnement temps réel à la liste des articles, triés par date décroissante. */
export function subscribeArticles(
	callback: (articles: Actualite[]) => void,
	onError?: (error: Error) => void
): () => void {
	const q = query(collection(db, ARTICLES_COLLECTION), orderBy('date', 'desc'));
	return onSnapshot(
		q,
		(snapshot) => {
			const articles = snapshot.docs.map((d) => {
				const data = d.data() as Omit<StoredArticle, 'updatedAt' | 'createdAt'>;
				return data;
			});
			callback(articles);
		},
		(error) => onError?.(error)
	);
}

/** Récupère tous les articles (one-shot), triés par date décroissante. */
export async function fetchArticles(): Promise<Actualite[]> {
	const q = query(collection(db, ARTICLES_COLLECTION), orderBy('date', 'desc'));
	const snap = await getDocs(q);
	return snap.docs.map((d) => d.data() as Actualite);
}

/** Récupère un article par son slug. */
export async function fetchArticleBySlug(slug: string): Promise<Actualite | null> {
	const ref = doc(db, ARTICLES_COLLECTION, slug);
	const snap = await getDoc(ref);
	if (!snap.exists()) return null;
	return snap.data() as Actualite;
}

/** Crée ou remplace un article (doc id = slug). */
export async function saveArticle(article: Actualite, isNew: boolean): Promise<void> {
	const ref = doc(db, ARTICLES_COLLECTION, article.slug);
	const payload: StoredArticle = {
		...article,
		...(isNew ? { createdAt: serverTimestamp() } : {}),
		updatedAt: serverTimestamp()
	};
	await setDoc(ref, payload, { merge: !isNew });
}

/** Supprime un article par son slug. */
export async function deleteArticle(slug: string): Promise<void> {
	const ref = doc(db, ARTICLES_COLLECTION, slug);
	await deleteDoc(ref);
}
