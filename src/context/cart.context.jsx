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

const removeCartItem = (cartItems, product)=>{
    let isLast = false;
    
    let newCartItems = cartItems.map(cartItem=>{
        if(cartItem.id === product.id){
            if(cartItem.quantity === 1){
                isLast=true;
                return cartItem;
            }
            return {...cartItem, quantity:cartItem.quantity-1}
        }
        return cartItem;
    })

    if(isLast){
        return newCartItems.filter(cartItem => cartItem.id !== product.id)
    }

    return newCartItems;
}

const deleteCartItem = (cartItems,product)=>{
    return cartItems.filter(cartItem=> cartItem.id !== product.id)
}

export const CartContext = createContext({
    isOpen :false, 
    setIsOpen:()=>null,
    cartItems:[], 
    addItemToCart:()=>null,
    removeItemFromCart:()=>null,
    deleteItemFromCart:()=>null,
    cartItemCount:0,
    total:0
});

function CartProvider({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount , setCartItemCount] = useState(0);
    const [total,setTotal] = useState(0);

    const addItemToCart = (product)=>{
        setCartItems(addCartItem(cartItems,product));
    }

    const removeItemFromCart = (product)=>{
        setCartItems(removeCartItem(cartItems,product));
    }

    const deleteItemFromCart =(product)=>{
        setCartItems(deleteCartItem(cartItems, product))
    }

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, item)=>total+item.quantity,0)
        setCartItemCount(newCartCount);
    },[cartItems]);

    useEffect(()=>{
        const newTotal = cartItems.reduce((sum, cartItem)=>sum+cartItem.quantity*cartItem.price,0);
        setTotal(newTotal);
    },[cartItems])
    
    const value = {isOpen,setIsOpen,cartItems,addItemToCart,removeItemFromCart,deleteItemFromCart,cartItemCount,total};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;