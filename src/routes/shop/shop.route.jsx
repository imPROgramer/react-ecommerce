import { useContext } from 'react';

import ProductsList from "../../components/products-list/products-list.component";
import { ProductsContext } from '../../context/shop.context';

function Shop(){
    const {products} = useContext(ProductsContext);
    return (
        <ProductsList products={products}></ProductsList>
    )
}

export default Shop;