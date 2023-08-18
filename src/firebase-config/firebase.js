/* eslint-disable no-undef */

import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

	authDomain: process.env.REACT_APP__FIREBASE_AUTH_DOMAIN,

	projectId: process.env.REACT_APP__FIREBASE_PROJECT_ID,

	storageBucket: 'invoice-app-8401a.appspot.com',

	messagingSenderId: '442232588528',

	appId: '1:442232588528:web:89b6cca18bea667f1c1a35',
};

export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const auth = getAuth(app);
