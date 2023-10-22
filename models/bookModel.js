const mongoose = require('mongoose');

const book = new mongoose.Schema({
    bookname: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    releasedate: {
        type: Date
    },
    amount: {
        type: Number
    }
});

const Book = mongoose.model('book', book, 'books');

module.exports = Book;