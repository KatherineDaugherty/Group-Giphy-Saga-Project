// import {useDispatch} from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function SearchView() {

    // const dispatch = useDispatch();

    const [keyWord, setKeyWord] = useState('');
    const [listStorage, setListStorage] = useState('');

    const searchGiphy = () => {
        axios({
            method: 'POST',
            url: '/api/search',
            data: { string: keyWord }
        }).then((response) => {
            console.log('HELLO ', response.data);

            setListStorage(response.data)
        }).catch((error) => {
            console.log(error);
            alert('Unable to POST');
        });
        // dispatch({type: 'POST', payload: keyWord})
    }


    return (
        <div>
            <p>The Fantastic World of Giphys!!!</p>
            <input
                type='text'
                value={keyWord}
                onChange={evt => setKeyWord(evt.target.value)} />
            <button onClick={searchGiphy}>Search Giphys</button>
        </div>
    );
}


export default SearchView;