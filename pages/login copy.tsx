import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth, provider } from '@/lib/firebase'; // update path to your firestore config

import { useAuth } from '@/contexts/auth';

const googleHandler = async () => {
  provider.setCustomParameters({ prompt: 'select_account' });
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // redux action? --> dispatch({ type: SET_USER, user });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const doSignOut = () => {
  signOut(auth)
    .then(() => {
      console.log('logged out');
      // navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

const Login = () => {
  const { user, login, logout } = useAuth();
  return (
    <div>
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8 bg-white mx-8 
                      rounded-lg p-5 shadow overflow-hidden"
      >
        <h1 className="text-3xl font-bold mb-2">Auth</h1>

        <div className="flex space-x-4 ">
          {!user && (
            <div className="bg-green-600 px-4 py-2 rounded-lg text-white">
              <button onClick={login}> Login </button>
            </div>
          )}
          {user && (
            <div className="bg-red-600 px-4 py-2 rounded-lg text-white">
              <button onClick={logout}> Logout </button>
            </div>
          )}
        </div>
        <div className="pt-5">
          <div className="pb-5 font-bold text-2xl">
            User is: {user ? 'Logged in' : 'Not Logged In'}
          </div>
          {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
      </div>
    </div>
  );
};

export default Login;
