import './category-list.stlyes.scss'
import CatergoryItem from "./category-item/category-item.component";

const categories = [
    {id:1,title:'HATS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/cvpntL1/hats.png', route:'shop/hats'},
    {id:2,title:'JACKETS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/px2tCc3/jackets.png', route:'shop/jackets'},
    {id:3,title:'SNEAKERS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png', route:'shop/sneakers'},
    {id:4,title:'WOMENS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/GCCdy8t/womens.png', route:'shop/womens'},
    {id:5,title:'MENS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/R70vBrQ/men.png', route:'shop/mens'}
];

function CatergoryList(){
    
    return (
        <div className="categories-container">
            {categories.map(category => <CatergoryItem category={category} key={category.id}></CatergoryItem>) }  
        </div>
    )
}

export default CatergoryList;