import './cart-dropdown.styles.scss';

import CartItem from './cart-item/cart-item.component';
import Button from '../../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';

function CartDropdown(){
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            {!cartItems && <span className='empty-message'>Your cart is empty</span>}
            <div className='cart-items'>
                {cartItems && cartItems.map((item)=><CartItem item={item}/>)}   
            </div>
            <Button buttonType="inverted">Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;

