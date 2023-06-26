// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';

// import { auth, 
//         createUserDocumentFromAuth,
//         signInWithGooglePopup,
//         signInWithGoogleRedirect } from '../../utils/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignIn from '../../components/sign-in-form/sign-in-form.component';
import "./authentication.styles.scss";


function Authentication(){

    // useEffect(() => {
    //     async function getResponseForSignWithRedirect(){
    //         const response = await getRedirectResult(auth);
    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //             console.log({userDocRef});        
    //         }
    //         console.log({response});
    //     };
    //     getResponseForSignWithRedirect();
    // },[]);
    // const logGoogleRedirectUser = async ()=>{
    //     const response = await signInWithGoogleRedirect();
    //     console.log({response});
    // }

    return (
        <div className='authentication-container'>
            <SignIn></SignIn>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;