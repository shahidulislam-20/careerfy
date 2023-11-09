import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Register User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login User
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //User signIn or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('logged in user', currentUser);
            setUser(currentUser);
            setLoading(false);       
        })
        return () => {
            unSubscribe();
        }
    }, [user?.email])


    //Google signIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    //User signOut
    const logOut = () => {
        return signOut(auth);
    }

    //Update User
    const userUpdate = (userName, userPhoto) => {
        return updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhoto
        })
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        userUpdate
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;