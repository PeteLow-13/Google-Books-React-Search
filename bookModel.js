const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var googlebooks = new Schema {
    title: {
        type: String,
        required: True
    },
    authors: [String],
    description: {
        type: String,
        required: True
    },
    image: {
        type: String,
        required: True
    },
    link: {
        type: String,
        required: True
    }
}

const Book = mongoose.model("Book", googlebooks);

module.exports = Book;
