import { createContext, useEffect, useState } from "react";
import PRODUCTS from '../assests/json/shop-data.json';
import SHOP_DATA from '../assests/json/shop-data.js';
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap:{}
})

function CategoriesProvider({children}){

    const [categoriesMap, setCategoriesMap] = useState({});
    
    // One time function should have been done thru seperate script.
    // useEffect(()=>{
        //     addCollectionAndDocuments('categories',SHOP_DATA);
        // },[]);
        
    useEffect(()=>{
        console.log('CategoriesContext called');
        const getCategoriesMap = async ()=>{
            try{
                if(Object.keys(categoriesMap).length === 0 ){
                    // setCategoriesMap( await getCategoriesAndDocuments());
                    setCategoriesMap(SHOP_DATA);
                }else{
                    setCategoriesMap(SHOP_DATA);
                }
            }catch(err){
                setCategoriesMap(SHOP_DATA);
            }
            
        }
        getCategoriesMap();
    },[]);
        
    const value = {categoriesMap};
    
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}

export default CategoriesProvider;