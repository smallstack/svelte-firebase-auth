import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { writable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyAUSVIPg8qgjYDt8os_ItO1zs3CDSCByuo',
	authDomain: 'smallstack-firebase-auth-test.firebaseapp.com',
	projectId: 'smallstack-firebase-auth-test',
	storageBucket: 'smallstack-firebase-auth-test.appspot.com',
	messagingSenderId: '57573834154',
	appId: '1:57573834154:web:c76e0bfc6d009924bdffd3'
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const currentUser = writable<User | null>(null);

onAuthStateChanged(firebaseAuth, (user) => {
	currentUser.set(user);
});
