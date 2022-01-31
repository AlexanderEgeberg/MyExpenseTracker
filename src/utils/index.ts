import auth from '@react-native-firebase/auth';

export const logOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};
