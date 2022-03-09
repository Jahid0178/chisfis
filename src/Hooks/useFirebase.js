import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";
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
        swal({
          title: "Good job!",
          text: "User Log In Successfully",
          icon: "success",
          button: "Continue",
        });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        swal({
          title: "Logged Out!",
          text: "User Logged Out Successfully",
          icon: "success",
          button: "See you again",
        });
      })
      .catch((error) => {
        setError(error);
      });
  };

  // Observe user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
  };
};

export default useFirebase;
