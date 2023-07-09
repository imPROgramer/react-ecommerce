import { Fragment, useContext } from "react";

import {CategoriesContext} from '../../context/categories.context';
import CategoryPreview from "./catergory-preview/category-preview.component";

function CategoriesPreview(){

    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(category=>{
                    const products = categoriesMap[category];
                    return (
                        <CategoryPreview 
                            title={category}
                            products={products}
                            key={category}
                        />
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;