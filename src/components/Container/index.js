import {Component} from 'react';
import BookCard from '../BookCard';

export default class Container extends Component {
    render( ) {
        return (
            <div id='book-list-container'>Booklist conatiner
                {this.props.books.map(book => <BookCard book={book} key={book.id} />)}
             </div>
        );
    } 
};
