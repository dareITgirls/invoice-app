import { signInWithPopup, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { auth, provider } from '../firebase-config/firebase';
import { setActiveUser } from '../store/authSlice';

export const useAuth = () => {
	const dispatch = useDispatch();

	onAuthStateChanged(auth, user => {
		if (user) {
			dispatch(setActiveUser(user.photoURL));
		} else {
			dispatch(setActiveUser(null));
		}
	});

	const handleSignIn = async () => {
		try {
			await signInWithPopup(auth, provider);
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

	return { handleSignOut, handleSignIn };
};
