import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import logger from 'redux-logger';

// function* rootSaga() {

// }

const favoritesReducer = (state = [], action) => {
    if (action.type === 'FAV_VIEW') {
      return [...state, action.payload];
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

sagaMiddleware.run(rootSage);

ReactDOM.render(<Provider store={storeInstance}>
    <App />
    </Provider>, 
    document.getElementById('root'));
// registerServiceWorker();
