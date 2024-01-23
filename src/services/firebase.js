// Imports

// - - - Firebase - - -
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Desde este archivo se inicializa el servicio de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC6U3wB-kAgr9p8VY2k9uk6J6XNO7LV9jo",
  authDomain: "shop-tissera.firebaseapp.com",
  projectId: "shop-tissera",
  storageBucket: "shop-tissera.appspot.com",
  messagingSenderId: "130937684061",
  appId: "1:130937684061:web:547f5a8389462c1a238db4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
