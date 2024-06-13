import { firebaseAuth } from '$lib/firebase.js';

export async function logoutAction(node: any) {
	await firebaseAuth.signOut();
}
