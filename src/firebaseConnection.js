import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAf8fDKB8Zji3YZ_TURq6j_hO5RgzpPeOc",
    authDomain: "curso-sp-9dd2c.firebaseapp.com",
    projectId: "curso-sp-9dd2c",
    storageBucket: "curso-sp-9dd2c.appspot.com",
    messagingSenderId: "1044535070229",
    appId: "1:1044535070229:web:fbcccf0b00b73d00f3481c",
    measurementId: "G-62S9TDXHWK"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export { db, auth }


