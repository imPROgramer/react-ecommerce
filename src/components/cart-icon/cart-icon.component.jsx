import { useContext } from 'react';

import {CartIconContainer,ItemCount,ShoppingIcon} from './cart-icon.style';

import { CartContext } from '../../context/cart.context';

function CartIcon(){

    const {isOpen,setIsOpen,cartItemCount} = useContext(CartContext);

    const shoppingBagClickHandler = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <CartIconContainer onClick={shoppingBagClickHandler} >
            <ShoppingIcon/>
            <ItemCount>{cartItemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;