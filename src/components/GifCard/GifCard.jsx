import axios from "axios";
import './GifCard.css';

function GifCard({ gif }) {

    const imageUrl = gif.images.downsized_medium.url;

    // const favCard = {};

    function addFavorite() {

        axios({
            method: 'POST',
            url: '/api/favorite',
            data: {url: imageUrl}
        }).then(() => console.log(`SUCCESS `))
            .catch((error) => {
                console.log(`error`, error);
            })
    }

    //POST to fav
    return (
        <div className="container">
            <div className="item">
            <img  src={imageUrl} />
            <br />
            <button onClick={addFavorite}>Favorite</button>
            </div>
            
        </div>
    )


}

export default GifCard;