
import ProductCard from './product-card/product-card.component';
import './products-list.style.scss';
function ProductsList({products}){
    
    return (
        <div className='product-list'>
            {products.map(product=><ProductCard product={product} key={product.id}/>)}
        </div>
    )
}

export default ProductsList;