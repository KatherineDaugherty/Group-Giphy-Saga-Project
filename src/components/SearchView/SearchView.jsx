import {useDispatch} from 'react-redux';
import {useState} from 'react';

function SearchView() {

    const dispatch = useDispatch();

    const  [keyWord, setKeyWord] = useState('');

    const searchGiphy = () => {
        dispatch({type: 'POST', payload: keyWord})
    }

    

    return (
        <div>
            <p>The Fantastic World of Giphys!!!</p>
            <input 
            type='text' 
            value={keyWord}
            onChange={evt => setKeyWord(evt.target.value)}/>
            <button onClick= {searchGiphy}>Search Giphys</button>
        </div>
    );
}


export default SearchView;