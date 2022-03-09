import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from "../Components/Security/Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  // Auth
  const auth = getAuth();

  // Provider
  const googleProvider = new GoogleAuthProvider();

  // Google login
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return {
    user,
    error,
    signInUsingGoogle,
  };
};

export default useFirebase;
