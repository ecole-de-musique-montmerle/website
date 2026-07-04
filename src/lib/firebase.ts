// Client Firebase partagé (Auth + Firestore).
// La config Firebase Web est publique par nature (sécurité assurée par les
// règles Firestore/Auth, pas par le secret de la clé).
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

export const firebaseConfig = {
	apiKey: 'AIzaSyChgYnG3qcjJWm9vmYJQz4RWVur0OY7jY4',
	authDomain: 'ecole-de-musique-3r.firebaseapp.com',
	projectId: 'ecole-de-musique-3r',
	storageBucket: 'ecole-de-musique-3r.firebasestorage.app',
	messagingSenderId: '129970993513',
	appId: '1:129970993513:web:71b0b69a0159ed5a3225f8'
};

/** Nom de la collection Firestore contenant les articles d'actualité. */
export const ARTICLES_COLLECTION = 'articles';

/** Provider Google réutilisé pour la connexion admin. */
export const googleProvider = new GoogleAuthProvider();

let app: FirebaseApp;
if (getApps().length === 0) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
}

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export default app;
