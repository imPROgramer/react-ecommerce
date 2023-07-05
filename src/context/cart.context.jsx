import { createContext, useEffect, useState} from 'react';

const addCartItem = (cartItems, product)=>{

    let isExisting = false;
    
    const newCartItems = cartItems.map(item => {
        if(item.id === product.id){
            isExisting=true;
            return {...item, quantity:item.quantity+1}
        }
        return item;
    });

    if(!isExisting) 
        return [...newCartItems,{...product,quantity:1}];

    return newCartItems


}


export const CartContext = createContext({
    isOpen :false, 
    setIsOpen:()=>null,
    cartItems:[], 
    addItemToCart:()=>null,
    cartItemCount:0
});

function CartProvider({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount , setCartItemCount] = useState(0);

    const addItemToCart = (product)=>{
        setCartItems(addCartItem(cartItems,product));
    }

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, item)=>total+item.quantity,0)
        setCartItemCount(newCartCount);
    },[cartItems]);
    
    const value = {isOpen,setIsOpen,cartItems,addItemToCart,cartItemCount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;