import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBzwSFDXHqAfF7ItKQmMMPOKeRmkUCVtUg",
  authDomain: "food-waste-sharing-app.firebaseapp.com",
  projectId: "food-waste-sharing-app",
  storageBucket: "food-waste-sharing-app.firebasestorage.app",
  messagingSenderId: "817833363759",
  appId: "1:817833363759:web:00c8a381e506be664839da",
  measurementId: "G-BL1FKHTFK3"
};

const app = initializeApp(firebaseConfig);

export default app