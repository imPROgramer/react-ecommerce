import { useContext } from 'react';
import Button from '../../button/button.component';
import './product-card.styles.scss';
import { CartContext } from '../../../context/cart.context';

function ProductCard({product}){
    const {name, imageUrl, price} = product ;
    const {addItemToCart} = useContext(CartContext);
    const addToCartHandler = ()=>{
        addItemToCart(product);
    }
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='product-card-footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addToCartHandler}>Add to card</Button>
        </div>
    )
}

export default ProductCard;