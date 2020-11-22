import {Component} from 'react';

export default class BookCard extends Component {
    
    render( ) {
        return (
            <div id='book-card'>
                <img id='book-image' src={this.props.book.volumeInfo.imageLinks.smallThumbnail}/>
                <h2 id='book-title'>{this.props.book.volumeInfo.title}</h2>
                <h3 id='book-authors'>{this.props.book.volumeInfo.authors}</h3>
                <p id='book-description'>{this.props.book.volumeInfo.description}</p>
                <a id='book-link' href={this.props.book.selfLink}>{this.props.book.volumeInfo.title}</a>
                <button id='view-buton'>view</button>
                <button id='save-buton'>save</button>
            </div>
        );
    }   
};
