import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Search from './components/Search/index.js';


function App() {
  return (
    <Router>
      <nav>NavBar</nav>
      <header>GoogleBooks search</header>
      <Switch>
        <Route path="/">
          <Search />
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
