import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, getAuth } from 'firebase/auth';
import LoadingComponent from '../components/loading';

const AuthContext = createContext<Auth>(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(null);
  useEffect(() => {
    const auth = getAuth();
    setAuth(auth);
  }, []);
  if (auth == null) {
    return <LoadingComponent fullscreen={true} />;
  }
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuthProvider = () => useContext<Auth>(AuthContext);
