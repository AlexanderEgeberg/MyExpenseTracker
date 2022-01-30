import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

function App() {
  GoogleSignin.configure({
    webClientId:
      '738388872687-r5dv33bc6u760ugd7agiittq6qnejhu4.apps.googleusercontent.com',
  });

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const sigInwithGoogleAsync = async () => {
    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in
      .then(user => {
        console.log(user);
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
        <Button title="Google Sign-In" onPress={sigInwithGoogleAsync} />
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.displayName.substring(0, 9)}</Text>
      <Button title="Log out" onPress={logOut} />
    </View>
  );
}

export default App;
