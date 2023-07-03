import {useState} from 'react';
import {createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithYourEmailandPassword } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultLoginFormFields = {
    email:'',
    password:''
}

function SingIn(){

    
    const [signInFields, setSignInFields] = useState(defaultLoginFormFields);
    const {email, password} = signInFields;

    const handleSubmit = async (event)=>{
        event.preventDefault();
        try{
            if(!email || !password ) return ;
            const user = await signInWithYourEmailandPassword(email,password);

            resetForm();
            console.log(user);
        }catch(err){
            console.log(err);
        }
    }

    const signInWithGoogle = async ()=>{
        await signInWithGooglePopup();
    }

    const handleChange = (event)=>{
        const {name,value} =event.target;
        setSignInFields({...signInFields, [name]:value});
    }

    const resetForm= ()=>{
        setSignInFields(defaultLoginFormFields);
    }

    return(
        <div className='sign-in-form-container'>
            <h2>Already have an account?</h2>
            <span>Sing in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    name='email' 
                    value={email}
                    onChange={handleChange}
                />
                <FormInput 
                    label='Password'
                    type='password'
                    required
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <div className='sign-in-button-container'>
                    <Button type="submit">Sign In</Button>
                    <Button buttonType="googleSignInButton" onClick={signInWithGoogle} type='button'>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SingIn;