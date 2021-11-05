import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga() {
    yield takeEvery('FETCH_FAVS', fetchGifs);
}
function* fetchGifs() {

    try {
        const response = yield axios.get('/api/favorite');
        console.log(response);
        yield put({ type: 'SET_FAVS', payload: response.data })
    } catch (err) {
        console.log(err)
        yield put({ type: POST_ERROR });
    }
}

const favoritesReducer = (state = [], action) => {
    if (action.type === 'SET_FAVS') {
        return action.payload;
    }
    return state;
}


const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        favoritesReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}>
    <App />
</Provider>,
    document.getElementById('root'));
// registerServiceWorker();
