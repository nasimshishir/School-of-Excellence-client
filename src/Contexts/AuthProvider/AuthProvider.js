import React from 'react';
import { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'
import { createContext } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    // const [spinner, setSpinner] = useState(true);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in auth state change', currentUser);
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;