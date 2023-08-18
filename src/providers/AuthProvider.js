/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, {useContext,useState} from 'react';

import { auth, provider } from '../firebase-config/firebase';
import { useAuth } from '../hooks/useAuth';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUserData] = useState(null);
    
        onAuthStateChanged(auth, user => {
            if (user) {
                setUserData(user);
            } else {
                setUserData(null);
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

    return (<AuthContext.Provider value={{user, handleSignIn, handleSignOut}}>{children}</AuthContext.Provider>
    )
}

