import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCard from '../FavoriteCard/FavoriteCard';


function FavoriteView() {
const dispatch = useDispatch();
    const favorites = useSelector((store) => store.favoritesReducer)


    const favView = () => {
        dispatch({
            type: 'FETCH_FAVS',
        })
    }

useEffect(() => {
    
    favView();
},[])
    return (

        <div className="container">
            {favorites.map((gif,i) => {
                return(
                <FavoriteCard key={i} gif={gif} />
            )})}
        </div>
    )
}//end FavoriteView




export default FavoriteView;