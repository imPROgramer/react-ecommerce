import { useContext } from 'react';
import './checkout-item-card.styles.scss';

import {CartContext} from '../../../context/cart.context'

function CheckoutItemCard({cartItem}){

    const { addItemToCart,removeItemFromCart,deleteItemFromCart } = useContext(CartContext);
    const {imageUrl, name, quantity, price} = cartItem;

    const incrementHandler = ()=>addItemToCart(cartItem);
    const decrementHandler = ()=>removeItemFromCart(cartItem);
    const deleteHandler = ()=>deleteItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <span className='arrow' onClick={decrementHandler}> &#10094; </span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={incrementHandler}> &#10095; </span>
            </span>
            <span className='price'> {price} </span>
            <div className='remove-button' onClick={deleteHandler}> &#10005; </div>
        </div>
    )
}

export default CheckoutItemCard;