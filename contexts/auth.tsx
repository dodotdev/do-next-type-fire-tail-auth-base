import { createContext, useContext, useState } from 'react';
import { parseCookies, setCookie, destroyCookie } from 'nookies';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, provider } from '@/lib/firebase';

type authContextType = {
  user: {
    accessToken: string;
  } | null;
  loading: boolean;
  isAuth: boolean;
  login: () => void;
  logout: () => void;
};

const authContextDefaultValues: authContextType = {
  user: null,
  loading: true,
  isAuth: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
  children: any;
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  {
    /* 
      I'm puzzled on this.  
      Found in chineese video to handle full refresh.  
      Works 
    */
  }
  onAuthStateChanged(auth, (currentUser: any) => {
    // console.log('STATE CHANGE', currentUser);
    setUser(currentUser);

    if (currentUser) {
      setIsAuth(true);
      setCookie(undefined, 'accessToken', currentUser.accessToken, {
        path: '/',
      });
    } else {
      setIsAuth(false);
      destroyCookie(null, 'accessToken', { path: '/' });
      // console.log('STATE CHANGE', user);
    }
    setLoading(false);
  });

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        setUser(result.user);
        console.log({ credential, token, user });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
  };

  const logout = () => {
    auth.signOut();
    setIsAuth(false);
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, loading, isAuth, login, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => useContext(AuthContext);
