import React, { Component } from 'react';
import API from '../utils/API';
import Hero from '../components/Hero/';

class Saved extends Component {
  state = {
    books: []
  }

  // Get Saved Books Function
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getSavedBooks()
      .then(({ data }) => this.setState({ books: data }))
      .catch(err => console.log(err));
  }

  // Delete Book Function
  deleteBook = (bookId) => {
    API.deleteBook(bookId)
      .then(this.getBooks)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <img src="https://idahovirtualreality.com/wp-content/uploads/2017/06/Google-Books.png"></img>
          <h1 className="display-4">Saved Books</h1>
          <Hero backgroundImage="https://wallpaperplay.com/walls/full/9/7/e/162414.jpg">
            <h1>(React) Google Books Search</h1>
            <h2>Search / Save / Delete</h2>
          </Hero>
        </div>
        <div className="container-fluid">
          <div className="row align-items-stretch">
            {/* use ternary to check if books are in state */}

            {!this.state.books.length
              ? (
                <h2>No Books Saved</h2>
              )
              : this
                .state
                .books
                .map(book => {
                  return (
                    <div className="col-12 col-md-6" key={book._id}>
                      <div className="card">
                        <h5 className="card-header">{book.title}</h5>
                        <img src={book.image} alt={book.title} className="card-img" />
                        <div className="card-body">
                          <h6 className="card-subtitle">By {book
                            .authors
                            .join(" & ")}</h6>
                          <p>{book.description}</p>
                          <div className="btn-group" role="group">
                            <button type="button" className="btn" onClick={() => this.deleteBook(book._id)}>Delete Book</button>
                            <a className="btn" href={book.link}>Go To Google Books</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
            }
          </div>
        </div>
      </div>

    )
  }
}

export default Saved;