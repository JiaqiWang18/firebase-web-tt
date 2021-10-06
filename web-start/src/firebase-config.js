/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyBenZJnULEm_hNZ_K-mhMW0-eQaBUkxCQs",
  authDomain: "chat-tutorial-5deb3.firebaseapp.com",
  projectId: "chat-tutorial-5deb3",
  storageBucket: "chat-tutorial-5deb3.appspot.com",
  messagingSenderId: "803426703364",
  appId: "1:803426703364:web:fc8b3ef981ee999abffd51",
  measurementId: "G-Q3HE4WC2ZF"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}