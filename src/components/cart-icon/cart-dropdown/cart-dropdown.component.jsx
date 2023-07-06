import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.styles.scss';

import CartItem from './cart-item/cart-item.component';
import Button from '../../button/button.component';
import { CartContext } from '../../../context/cart.context';

function CartDropdown(){
    const {cartItems, setIsOpen} = useContext(CartContext);
    const navigate = useNavigate();

    const gotoCheckoutHandler = ()=>{
        navigate('checkout')
        setIsOpen(false);
    }
    return (
        <div className='cart-dropdown-container'>
            {!cartItems && <span className='empty-message'>Your cart is empty</span>}
            <div className='cart-items'>
                {cartItems && cartItems.map((item)=><CartItem item={item}/>)}   
            </div>
            <Button buttonType="inverted" onClick={gotoCheckoutHandler}>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;

