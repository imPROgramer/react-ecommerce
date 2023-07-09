import { useNavigate } from 'react-router-dom';
import {BackgroundImage, Body, CategoryContainer} from './category-item.styles';

// function CatergoryItem(prop){
// function CatergoryItem({category:{title,action,imageUrl}}){
function CatergoryItem({category}){
    const {title,action,imageUrl,route} = category;
    const navigate = useNavigate();

    const onNavigateHandler =()=>{
        navigate(route);
    } ;
    return (
        <CategoryContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>{action}</p>
            </Body>
        </CategoryContainer>
    )
}

export default CatergoryItem;