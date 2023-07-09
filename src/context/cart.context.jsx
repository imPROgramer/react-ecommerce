import { createContext, useEffect, useState, useReducer} from 'react';
import { createAction } from '../reducers/reducer.utils';

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

const CART_ACTION_TYPES={
    SET_IS_OPEN : 'SET_IS_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const INITIAL_STATE ={
    isOpen:false,
    cartItems:[],
    cartItemCount:0,
    total:0
}

export const cartReducer = (state,action) => {

    const {type,payload} = action;
    // const {cartItems, cartItemCount, total, isOpen} =payload;
    switch(type){
        case CART_ACTION_TYPES.SET_IS_OPEN:
            return { ...state, isOpen: payload };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { ...state, ...payload };
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }

}


function CartProvider({children}) {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
    const {cartItems,cartItemCount,total,isOpen} =state;

    const updateCartItemsReducer = (newCartItems) => {
        const newCartItemCount = newCartItems.reduce((count, item)=> count+ item.quantity , 0)
        const newTotal = newCartItems.reduce((total, item)=> total+ item.quantity*item.price , 0)
        // dispatch({type:CART_ACTION_TYPES.SET_CART_ITEMS , payload:{total:newTotal, cartItemCount:newCartItemCount, cartItems:newCartItems}});
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {total:newTotal, cartItemCount:newCartItemCount, cartItems:newCartItems}))
    }

    const addItemToCart = (product)=>{
        updateCartItemsReducer(addCartItem(cartItems,product));

    }

    const removeItemFromCart = (product)=>{
        updateCartItemsReducer(removeCartItem(cartItems,product));
    }

    const deleteItemFromCart =(product)=>{
        updateCartItemsReducer(deleteCartItem(cartItems, product))
    }
    const setIsOpen =(payload)=>{
        // dispatch({type:CART_ACTION_TYPES.SET_IS_OPEN,payload});
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_OPEN, payload))
    }
    const value = {isOpen,setIsOpen,cartItems,addItemToCart,removeItemFromCart,deleteItemFromCart,cartItemCount,total};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;