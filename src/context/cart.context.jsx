import { createContext, useState} from 'react';

export const CartContext = createContext({
    isOpen :false, 
    setIsOpen:()=>null
});

function CartProvider({children}) {

    const [isOpen, setIsOpen] = useState(false);
    // const [products, setProducts] = useState([]);

    const value={isOpen,setIsOpen};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;