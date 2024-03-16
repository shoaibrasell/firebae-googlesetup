import { useState } from "react";
import "./App.css";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  //In show the gmail and name then do this
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <h1>Firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google SIgn in</button>
      { user && <div className="card">
          <h4>User : {user.displayName}</h4>
          <h4>Email: {user.email}</h4>
          <img src="" alt="" />
        </div>
      }
    </div>
  );
}

export default App;
