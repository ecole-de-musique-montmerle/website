// Store d'authentification Firebase (runes Svelte 5).
// Expose l'utilisateur courant, l'état de chargement et les actions de
// connexion / déconnexion via Google Sign-In.
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { auth, googleProvider } from '$lib/firebase';

type AuthState = {
	user: User | null;
	loading: boolean;
	error: string | null;
};

function createAuthStore() {
	let state = $state<AuthState>({ user: null, loading: true, error: null });

	// onAuthStateChanged est appelé une fois au démarrage puis à chaque
	// changement de session. On ne l'initialise qu'une seule fois.
	onAuthStateChanged(auth, (user) => {
		state.user = user;
		state.loading = false;
	});

	async function signInWithGoogle() {
		state.error = null;
		state.loading = true;
		try {
			await signInWithPopup(auth, googleProvider);
		} catch (err) {
			const message = err instanceof Error ? err.message : 'Échec de la connexion.';
			state.error = message;
			state.loading = false;
		}
	}

	async function signOutUser() {
		state.error = null;
		try {
			await signOut(auth);
		} catch (err) {
			const message = err instanceof Error ? err.message : 'Échec de la déconnexion.';
			state.error = message;
		}
	}

	return {
		get user() {
			return state.user;
		},
		get loading() {
			return state.loading;
		},
		get error() {
			return state.error;
		},
		signInWithGoogle,
		signOutUser
	};
}

export const authStore = createAuthStore();
