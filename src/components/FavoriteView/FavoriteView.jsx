import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
            <img src={favorites} />
        </div>
    )
}//end FavoriteView




export default FavoriteView;