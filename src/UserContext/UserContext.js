import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase";
export const userContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    signOut(auth);
  };
  const authInfo = {
    createUser,
    setUser,
    user,
    logIn,
    signInWithGoogle,
    logOut,
  };
  return (
    <div>
      <userContext.Provider value={authInfo}>{children}</userContext.Provider>
    </div>
  );
};

export default UserContext;
