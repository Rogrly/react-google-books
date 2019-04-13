// Calling Mongoose & Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// MongoDB Book Schemas
const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array
  },
  description: {
    type: String
  },
  link: {
    type: String
  },
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

// Exporting Module "Book"
module.exports = Book;
