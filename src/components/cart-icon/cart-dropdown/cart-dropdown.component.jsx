import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.jsx';

import CartItem from './cart-item/cart-item.component';
import Button, { BUTTON_TYPE_CLASSES } from '../../button/button.component';
import { CartContext } from '../../../context/cart.context';
import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles.jsx';

function CartDropdown(){
    const {cartItems, setIsOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const gotoCheckoutHandler = ()=>{
        navigate('/checkout')
        setIsOpen(false);
    }
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length === 0 && <EmptyMessage>Your cart is empty</EmptyMessage>} 
                {cartItems && cartItems.map((item)=><CartItem item={item}/>)}   
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={gotoCheckoutHandler}>Go To Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;

