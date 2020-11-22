import { Component } from 'react';
import API from '../../utils/API';


class Search extends Component {
    constructor(){
        super();
        
        this.state = {
            books: []
        } 
        this.search = this.search.bind(this); 
    }
    
    search = function() {
        var terms = document.getElementById('search-text').value;

        API.search(terms)
            .then(result => {
                this.setState({ books: result.items})
            });
    }
    
    render(){
        return(
            <div>
                <div id='search'>search
                    <input type='textbox' id='search-text'></input>
                    <button onClick={this.search}>Search</button>
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
            </div>
            
        );
    }
}

export default Search;