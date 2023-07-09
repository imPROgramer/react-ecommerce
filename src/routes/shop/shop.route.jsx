import {Routes , Route} from 'react-router-dom';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import Category from '../../components/categories-preview/category/category.component';

function Shop(){


    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}></Route>
            <Route path=':category' element={<Category/>}></Route>
        </Routes>
    )
}

export default Shop;
