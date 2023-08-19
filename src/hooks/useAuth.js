import { signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth, provider } from '../firebase-config/firebase';
import { logIn, logOut } from '../store/authSlice';

export const useAuth = () => {
	const [user, setUser] = useState(null);

	const dispatch = useDispatch();

	onAuthStateChanged(auth, user => {
		if (user) {
			setUser(user);

			dispatch(logIn());
		} else {
			setUser(null);

			dispatch(logOut());
		}
	});

	const handleSignIn = async () => {
		try {
			const authResult = await signInWithPopup(auth, provider);
		} catch (e) {
			console.log(e);
		}
	};

	const handleSignOut = async () => {
		try {
			await signOut(auth);
		} catch (e) {
			console.log(e);
		}
	};

	return { handleSignOut, handleSignIn, user };
};
