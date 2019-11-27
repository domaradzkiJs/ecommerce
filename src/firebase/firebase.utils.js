import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
        apiKey: "AIzaSyD6dSJZswv_Y1HNf9_cf4Qmbd5svaLLCuI",
        authDomain: "ecommerce-platform-78d29.firebaseapp.com",
        databaseURL: "https://ecommerce-platform-78d29.firebaseio.com",
        projectId: "ecommerce-platform-78d29",
        storageBucket: "ecommerce-platform-78d29.appspot.com",
        messagingSenderId: "69511367406",
        appId: "1:69511367406:web:a3b847c89b06f29b7581ff",
        measurementId: "G-56X0ZW6Y5C"      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
