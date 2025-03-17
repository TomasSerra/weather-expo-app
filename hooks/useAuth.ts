import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase-config";

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUser = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const login = async (email: string, password: string) => {
    if (email === "" || password === "") {
      setError("Email and password are required");
      return;
    }
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = async () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => setError(error.message));
  };

  return { user, loading, error, login, logout, createUser };
};

export default useAuth;
