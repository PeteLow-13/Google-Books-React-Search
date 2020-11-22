import { Component } from 'react';
import API from '../../utils/API';
import Container from '../Container';


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
                <Container books={this.state.books} />
            </div>
            
        );
    }
}

export default Search;