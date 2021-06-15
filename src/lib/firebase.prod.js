import Firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
  apiKey: 'AIzaSyDtequfDXaGc6YwgJDT641fbi5eC-G2UYg',
  authDomain: 'netflix-6ac6d.firebaseapp.com',
  projectId: 'netflix-6ac6d',
  storageBucket: 'netflix-6ac6d.appspot.com',
  messagingSenderId: '283571213752',
  appId: '1:283571213752:web:e17d50deb9fb87da0a6b4d'
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase);

export { firebase }
