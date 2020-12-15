import React, { useContext } from "react";
import firebase from "firebase";
import { FirebaseAuth } from "react-firebaseui";
import { AuthContext } from "../../Firebase/context";
import { Redirect } from "react-router-dom";

export default function SignIn() {
    //get the user state from the context
    const { user } = useContext(AuthContext); 
  
    //this is our config for FirebaseAuth
    const uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccess: () => false,
      },
    };
  
  //if user exists or signed in, we redirect the page to home, else display the sign in methods with FirebaseAuth
    return (
      <div>
        {!!user ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <div>
            <h1>Please Sign In</h1>
            <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
        )}
      </div>
    );
  }