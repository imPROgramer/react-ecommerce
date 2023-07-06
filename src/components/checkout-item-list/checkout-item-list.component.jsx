import { useContext } from 'react';
import './checkout-item-list.styles.scss';
import { CartContext } from '../../context/cart.context';
import CheckoutItemCard from './checkout-item-card/checkout-item-card.component';

function CheckoutItemList(){

    const {cartItems,total} = useContext(CartContext);

    return (
        <div className='checkout-container'>

            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            { cartItems.map((cartItem) => <CheckoutItemCard cartItem={cartItem} key={cartItem.id}/>)}

            <span className='total'>
                Total: {total}
            </span>

        </div>
    )
}

export default CheckoutItemList;