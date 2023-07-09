import {BaseButton,GoogleSignInButton,InvertedButton} from './button.styles.jsx';

export const BUTTON_TYPE_CLASSES ={
    base:'base',
    googleSignInButton: 'google-sign-in',
    inverted:'inverted',

}

const getButton= (buttonType = BUTTON_TYPE_CLASSES.base)=>(
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.googleSignInButton]:GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]
);


function Button({children, buttonType, ...otherProps}){
    const CutomButton = getButton(buttonType);
    return (
        <CutomButton {...otherProps}>
            {children}
        </CutomButton>
    )
}

export default Button;