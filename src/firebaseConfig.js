import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSG_SENDER_ID,
  appId: process.env.VUE_APP_ID
};
firebase.initializeApp(firebaseConfig)


// firestore "database" API
export const db = firebase.firestore()

// used to log a user in
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()

// file storage API
export const storage = firebase.storage();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })