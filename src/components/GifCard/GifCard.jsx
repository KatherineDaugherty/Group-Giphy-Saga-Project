function GifCard({ gif }) {

    //POST to fav
    return (
        <div>
            <img src={gif.images.downsized_medium.url} />
            <button>Favorite</button>
        </div>
    )


}

export default GifCard;