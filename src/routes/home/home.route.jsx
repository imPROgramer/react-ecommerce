import CatergoryList from "../../components/category-list/category-list.component";

function Home(){

    const categories = [{id:1,title:'HATS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/cvpntL1/hats.png'},
                      {id:2,title:'JACKETS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/px2tCc3/jackets.png'},
                      {id:3,title:'SNEAKERS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png'},
                      {id:4,title:'WOMENS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/GCCdy8t/womens.png'},
                      {id:5,title:'MENS',action:'SHOP NOW',imageUrl:'https://i.ibb.co/R70vBrQ/men.png'}];


    return (
        <CatergoryList categories={categories}></CatergoryList>
    );
}

export default Home;