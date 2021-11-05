import axios from "axios";

function FavoriteCard({ gif }) {

    const imageUrl = gif.url;

    // const favCard = {};


    //POST to fav
    return (
        <div >
            <img className="container" src={imageUrl} />
            <br />
            {/* <button onClick={addFavorite}>Favorite</button> */}
        </div>
    )


}

export default FavoriteCard;