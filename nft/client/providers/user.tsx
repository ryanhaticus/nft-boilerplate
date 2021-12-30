import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  signOut,
  sendPasswordResetEmail,
  UserCredential
} from 'firebase/auth';
import { useAuthProvider } from './auth';
import LoadingComponent from '../components/loading';
import { useRouter } from 'next/router';

interface UserContextParams {
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  sendPasswordReset: (email: string) => Promise<void>;
  user: User;
}

const UserContext = createContext<UserContextParams>(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [awaitingUser, setAwaitingUser] = useState(true);
  const router = useRouter();
  const authProvider = useAuthProvider();
  const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      authProvider,
      email,
      password
    );
    return userCredential;
  };
  const sendPasswordReset = async (email: string) => {
    await sendPasswordResetEmail(authProvider, email);
  };
  const _signOut = async () => {
    await signOut(authProvider);
    router.push('/');
  };
  const signIn = async (email: string, password: string) => {
    const _user = await signInWithEmailAndPassword(
      authProvider,
      email,
      password
    );
    return _user;
  };
  useEffect(() => {
    authProvider.onAuthStateChanged((_user) => {
      setUser(_user);
      setAwaitingUser(false);
    });
  }, []);
  if (awaitingUser) {
    return <LoadingComponent fullscreen={true} />;
  }
  return (
    <UserContext.Provider
      value={{
        signUp,
        signOut: _signOut,
        signIn,
        sendPasswordReset,
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserProvider = () => useContext<UserContextParams>(UserContext);
