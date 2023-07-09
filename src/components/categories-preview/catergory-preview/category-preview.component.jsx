import './category-preview.styles.scss';
import ProductsList from '../../products-list/products-list.component';
import { Link } from 'react-router-dom';

function CategoryPreview({title, products, all}){
    // let newProducts = all? products : products.filter((_ , index) => index > 4 );

    let newProducts = all? products: products?.slice(0,4);
    console.log({newProducts,products});
    return (
        <div className='category-preview-container'>
            <h2>
                { all && <span className='title' to={title}>{title.toUpperCase()}</span>}
                { !all && <Link className='title' to={title}>{title.toUpperCase()}</Link>}
            </h2>
            <div className='preview'>
                {newProducts && <ProductsList products={newProducts}/>}
            </div>
        </div>
    );

}

export default CategoryPreview;