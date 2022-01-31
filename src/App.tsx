import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Button } from 'react-native-paper';
import Layout from './Layout/Layout';
import HomePage from './screens/HomePage';

function App() {
  GoogleSignin.configure({
    webClientId:
      '738388872687-r5dv33bc6u760ugd7agiittq6qnejhu4.apps.googleusercontent.com',
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChanged(xuser: any) {
    setUser(xuser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  const sigInwithGoogleAsync = async () => {
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(userx => {
        console.log(userx);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Button onPress={sigInwithGoogleAsync}>Google Sign-In</Button>
      </View>
    );
  }

  return (
    <Layout user={user}>
      <HomePage />
    </Layout>
  );
}

export default App;
