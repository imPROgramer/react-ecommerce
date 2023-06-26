// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
    signInWithRedirect, signInWithPopup, signInWithEmailAndPassword,
    GoogleAuthProvider, 
    createUserWithEmailAndPassword} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQKs7jycjTv4HHGzTIJkdINO6IYvHal38",
  authDomain: "react-ecommerce-2db0a.firebaseapp.com",
  projectId: "react-ecommerce-2db0a",
  storageBucket: "react-ecommerce-2db0a.appspot.com",
  messagingSenderId: "1086593281891",
  appId: "1:1086593281891:web:d419cf81f1a845dfce6d56",
  measurementId: "G-5FET6DJLY2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
console.log(analytics);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,googleAuthProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleAuthProvider);

export const signInWithYourEmailandPassword = (email, password)=> signInWithEmailAndPassword(auth,email,password);

export const dbFirestore = getFirestore();

export const createUserDocumentFromAuth = async (user,extraInformation)=>{
    
    if(!user) return ;

    const userDocRef = doc(dbFirestore, 'users', user.uid);
    console.log(userDocRef);

    const userSnapshot  = await getDoc(userDocRef);
    console.log(userSnapshot);

    console.log(userSnapshot.exists());
    if(!userSnapshot.exists()){
        const {displayName,email}=user;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {displayName, email, createdAt ,...extraInformation});
        }catch(err){
            console.error('Firebase :: Error while set doc',{err});
        }

    }

}

export const createAuthUserWithEmailandPassword = async(email,password)=>{
    if(!email || !password) return ;

    return createUserWithEmailAndPassword(auth,email,password);
}
