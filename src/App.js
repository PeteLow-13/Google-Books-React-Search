import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <nav>NavBar</nav>
      <header>GoogleBooks search</header>
      <Switch>
        <Route path="/search">
        <div id='search'>search
        <input type='textbox'></input>
        <button>Search</button>
      </div>
      <div id='book-list-container'>Booklist conatiner
        <div id='book-card'>bookcard
          <image id='book-image'>image</image>
          <h2 id='book-title'>Title</h2>
          <h3 id='book-authors'>authors</h3>
          <p id='book-description'>description</p>
          <a id='book-link'>url</a>
          <button id='view-buton'>view</button>
          <button id='save-buton'>save</button>
        </div>
      </div>
        </Route>
        <Route path="/saved">
        <div id='saved-books-container'>saved book container
        <div id='book-card'>book card
          <image id='book-image'>image</image>
          <h2 id='book-title'>Title</h2>
          <h3 id='book-authors'>authors</h3>
          <p id='book-description'>description</p>
          <a id='book-link'>url</a>
          <button id='view-buton'>view</button>
          <button id='delete-buton'>delete</button>
        </div>
      </div>
        </Route>
      </Switch>
      <footer>footer</footer>
    </Router>
  );
}

export default App;
