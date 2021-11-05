import {useSelector} from 'react-redux';


function FavoriteView() {

    const favorites = useSelector((store) => store.passengersReducer)


    const favView = () => {
        dispatch({
          type: 'FAV_VIEW',
        })
    }
  

    return (

<div className="container">
<img src={favorites} />
</div>

    )
}//end FavoriteView




export default FavoriteView;