import firebase from 'firebase';
import {StyledFirebaseAuth} from 'react-firebaseui';

import React from 'react';

const config = {
  apiKey: "AIzaSyDm_aiHYiZQc4ypOHIwywQ3J8JFPMRWbrk",
  authDomain: "rolltable.firebaseapp.com",
  databaseURL: "https://rolltable.firebaseio.com",
  projectId: "rolltable",
  storageBucket: "rolltable.appspot.com",
  messagingSenderId: "404433756558"
};

const uiConfig = ({
  signInSuccessUrl: '/rolltables/#/pages',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
});

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  }

  // *** Auth API ***

  doSignOut = () => this.auth.signOut();

  LoginScreen = (props) => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={this.auth} />
}

export const FirebaseContext = React.createContext(null);

export default Firebase;