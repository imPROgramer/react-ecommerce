import './category-item.styles.scss';

// function CatergoryItem(prop){
// function CatergoryItem({category:{title,action,imageUrl}}){
function CatergoryItem({category}){
    const {title,action,imageUrl} = category;
    return (
        <div className="category-container">
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>{action}</p>
            </div>
        </div>
    )
}

export default CatergoryItem;