import { useContext } from 'react';

import { ReactComponent as ShoppingBag } from '../../assests/shopping-bag.svg';

import './cart-icon.style.scss';

import { CartContext } from '../../context/cart.context';

function CartIcon(){

    const {isOpen,setIsOpen} = useContext(CartContext);

    const shoppingBagClickHandler = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className='cart-icon-container' onClick={shoppingBagClickHandler} >
            <ShoppingBag className="shopping-icon"/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;