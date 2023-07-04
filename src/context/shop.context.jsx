import { createContext, useState } from "react";
import PRODUCTS from '../assests/json/shop-data.json';
export const ProductsContext = createContext({
    products:[],
    setProducts: ()=>null
})

function ProductsProvider({children}){

    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts};
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
}

export default ProductsProvider;