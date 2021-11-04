import {useDispatch} from 'react-redux';

function SearchView() {

    const dispatch = useDispatch();

    const addGiphy = (giphys) => {
        dispatch({type: 'POST', payload: giphys})
    }


    return (
        <div>
            <p>The Fantastic World of Giphys!!!</p>
            <input 
            type='text' 
            value='Search Giphys!' 
            onChange='TBD'/>
            <button onClick= {(event) => searchGiphy('Giphy')}>Search Giphys</button>
        </div>
    );
}


export default SearchView;