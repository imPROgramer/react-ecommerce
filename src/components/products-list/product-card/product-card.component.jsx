import Button from '../../button/button.component';
import './product-card.styles.scss';

function ProductCard({product}){
    const {name, imageUrl, price} = product ;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='product-card-footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Add to card</Button>
        </div>
    )
}

export default ProductCard;