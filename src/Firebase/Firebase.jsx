// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC-oKD9ZaYl67SSxh8zH8b1boDAvGH8DTE",
//   authDomain: "narrativenet-88c34.firebaseapp.com",
//   databaseURL: "https://narrativenet-88c34-default-rtdb.firebaseio.com",
//   projectId: "narrativenet-88c34",
//   storageBucket: "narrativenet-88c34.appspot.com",
//   messagingSenderId: "200164354959",
//   appId: "1:200164354959:web:8797423d7a9f3f5006b9fa",
//   measurementId: "G-S0RZVZ8MDG",
// };



// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);





















import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC-oKD9ZaYl67SSxh8zH8b1boDAvGH8DTE",
  authDomain: "narrativenet-88c34.firebaseapp.com",
  databaseURL: "https://narrativenet-88c34-default-rtdb.firebaseio.com",
  projectId: "narrativenet-88c34",
  storageBucket: "narrativenet-88c34.appspot.com",
  messagingSenderId: "200164354959",
  appId: "1:200164354959:web:8797423d7a9f3f5006b9fa",
  measurementId: "G-S0RZVZ8MDG",
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const imgDb = getStorage(app)
export const txtDb = getFirestore(app)