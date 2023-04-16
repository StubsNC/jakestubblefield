
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDMsQGJHLNsTKQ50PLt3BoDl6awnG7N43c",
    authDomain: "xbox-god.firebaseapp.com",
    projectId: "xbox-god",
    storageBucket: "xbox-god.appspot.com",
    messagingSenderId: "393007247791",
    appId: "1:393007247791:web:d76282cd9b190ebdfd3f5a",
    measurementId: "G-1R3CSYHRCK"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
//sdaf

export { storage };
