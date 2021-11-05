// import {useDispatch} from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import GifCard from '../GifCard/GifCard';

function SearchView() {

    // const dispatch = useDispatch();

    const [keyWord, setKeyWord] = useState('');
    const [listStorage, setListStorage] = useState([]);

    const searchGiphy = () => {
        axios({
            method: 'POST',
            url: '/api/search',
            data: { string: keyWord }
        }).then((response) => {
            console.log('HELLO ', response.data);

            setListStorage(response.data.data)
        }).catch((error) => {
            console.log(error);
            alert('Unable to POST');
        });
        // dispatch({type: 'POST', payload: keyWord})
    }


    return (<>
    
        <div>
            <h2>The Fantastic World of Giphys!!!</h2>
            <input
                type='text'
                value={keyWord}
                onChange={evt => setKeyWord(evt.target.value)} />
            <button onClick={searchGiphy}>Search Giphys</button>
            <br/>
        </div>

        <div>
        <br/>

            {listStorage.map((gif,i) => {
                return(
                <GifCard key={i} gif={gif} />
            )})}
        </div>
    </>

    );
}


export default SearchView;