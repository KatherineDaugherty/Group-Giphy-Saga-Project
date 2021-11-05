import { useSelector } from 'react-redux';
import './FavoriteView.css';

function FavoriteView() {

    const favorites = useSelector((store) => store.passengersReducer)

    const favView = () => {
        dispatch({
            type: 'FAV_VIEW',
        })
    }


    return (<>
<h1>    Favorites Page   </h1>

        <div className="container">
            <img src={favorites} />
        </div>
    </>
    )
}//end FavoriteView

export default FavoriteView;