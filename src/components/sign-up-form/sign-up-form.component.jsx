import { useState } from "react";
import { createAuthUserWithEmailandPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form.styles.scss';
const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
};

function SignUpForm (){

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password,confirmPassword} = formFields;
    const resetFormFeilds=()=>{
        setFormFields({...defaultFormFields});
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword) return ;
        try{
            const user = await createAuthUserWithEmailandPassword(email,password);
            createUserDocumentFromAuth(user.user, {displayName});
            console.log({user});
            resetFormFeilds();
        }catch(err){
            console.error('Failed to signup', {err});
        }

    }

    const handleChange = (event)=>{
        const{name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    };

    return (

        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type='text' required name="displayName" value={displayName} onChange={handleChange}></FormInput>

                <FormInput label="Email" type="email" required name="email" value={email} onChange={handleChange}></FormInput>

                <FormInput label="Password" type="password" required name="password" value={password} onChange={handleChange}></FormInput>

                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={handleChange}></FormInput> 

                <Button type="submit"> Sign Up</Button>
            </form>
        </div>
    )
}


export default SignUpForm;