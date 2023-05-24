import  { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
  const googleLogIn = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };
  const newUser =(email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = (email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () =>{
    setLoader(true)
    return signOut(auth)
  }
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (loggedUser)=>{
        setUser(loggedUser)
        setLoader(false)
        console.log(loggedUser)
    })
    return ()=>{
        return unSubscribe()
    }
  },[])
  const authData = {
    user,
    loader,
    newUser,
    googleLogIn,
    logIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
