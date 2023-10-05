import { createContext, useEffect, useState } from "react";
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import app from "../Firebase/__firebase.config";



export const AuthContext=createContext(null)
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser]= useState(null);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signout=()=>{
       return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser)
        })
        return ()=>{
           unSubscribe()
        }
    },[])

    const authInfo={
        user,
        createUser,
        signInUser,
        signout
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;