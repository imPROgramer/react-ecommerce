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

    return (
        <div className='authentication-container'>
            <SignIn></SignIn>
            <SignUpForm></SignUpForm>
        </div>
    )
}

export default Authentication;