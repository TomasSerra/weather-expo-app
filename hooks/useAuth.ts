import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { firebaseConfig } from "@/firebase-config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserFromStorage = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };

    loadUserFromStorage();

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await AsyncStorage.setItem("user", JSON.stringify(currentUser));
      } else {
        setUser(null);
        await AsyncStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const createUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      await AsyncStorage.setItem("user", JSON.stringify(userCredential.user));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const login = async (email: string, password: string) => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      await AsyncStorage.setItem("user", JSON.stringify(userCredential.user));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      await AsyncStorage.removeItem("user");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return { user, loading, error, login, logout, createUser };
};

export default useAuth;
