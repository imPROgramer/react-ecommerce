import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CategoriesContext } from '../../../context/categories.context';
import CategoryPreview from "../catergory-preview/category-preview.component";



function Category(){

    const {categoriesMap} = useContext(CategoriesContext);

    const {category} = useParams();

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    return (
        <CategoryPreview title={category} products={products} all={true}></CategoryPreview>
    )
    
}

export default Category;