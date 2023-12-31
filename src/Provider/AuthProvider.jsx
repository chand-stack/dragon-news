import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, user=>{
            setUser(user)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        googleSignIn,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;