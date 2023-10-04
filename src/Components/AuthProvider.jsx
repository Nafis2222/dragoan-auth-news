import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase.config";
import app from "../firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [userfinal,setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const auth = getAuth(app)

    const createUser = (email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const Logout = () =>{
        setloading(true)
       return signOut(auth)
    }

    const signIn = (email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setloading(false)
        })
        return () =>{
            unSubscribe()
        }
    }, [])




    const authInfo = {userfinal,createUser,Logout,signIn,loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;