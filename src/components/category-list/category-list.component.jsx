import './category-list.stlyes.scss'
import CatergoryItem from "./category-item/category-item.component";

function CatergoryList({categories}){
    
    return (
        <div className="categories-container">
            {categories.map(category => <CatergoryItem category={category} key={category.id}></CatergoryItem>) }  
        </div>
    )
}

export default CatergoryList;