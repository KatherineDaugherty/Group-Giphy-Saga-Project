import React from 'react';
import SearchView from '../SearchView/SearchView';
import FavoriteView from '../FavoriteView/FavoriteView.jsx'
import './app.css';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchView />
      <FavoriteView />
    </div>
  );
}

export default App;
