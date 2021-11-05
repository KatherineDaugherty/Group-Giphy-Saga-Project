import React from 'react';
import SearchView from '../SearchView/SearchView';
import FavoriteView from '../FavoriteView/FavoriteView.jsx'
import './App.css';

//adding Links & Routes 
import {
  Route,
  HashRouter as Router,
  Link
} from 'react-router-dom';



//start Function APP 
function App(props) {
  return (
    <Router>
      <nav>
        <Link to="/">Search Gif</Link>
        <br/>
        <Link to="/FavoriteView"> Favorites </Link>
      </nav>

      <div>
        <h1 className="neonText">Giphy Search!</h1>
        <SearchView />
        <FavoriteView />
        <h1>Giphy Search!</h1>
        <Route path="/" exact>
          <SearchView />
        </Route>

        <Route path="/FavoriteView">
          <FavoriteView />
        </Route>


      </div>
    </Router>
  );
}

export default App;
