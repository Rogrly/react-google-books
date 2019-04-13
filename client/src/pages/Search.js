import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import Hero from '../components/Hero/';
import { Link } from 'react-router-dom';
import API from '../utils/API';

class Search extends Component {
  state = {
    searchTerm: "",
    books: []
  }

  // Change Handle Event 
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // Sumbit Form Event
  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }

    API
      .searchGoogleBooks(this.state.searchTerm)
      .then(({ data: {
        items
      } }) => {
        //Filter Items To Specific Calls
        const books = items.map(book => {
          return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            id: book.id,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
        });

        this.setState({ books });

      })
      .catch(err => console.log(err));
  }

  saveBook = bookId => {
    const selectedBook = this
      .state
      .books
      //Find Book By ID
      .find(({ id }) => id === bookId);

    API
      .saveBook(selectedBook)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">Welcome</h1>
          <img src="https://idahovirtualreality.com/wp-content/uploads/2017/06/Google-Books.png"></img>
          <Hero backgroundImage="https://wallpaperplay.com/walls/full/9/7/e/162414.jpg">
            <h1>(React) Google Books Search</h1>
            <h2>Search / Save / Delete</h2>
          </Hero>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3">
              <h3>Search</h3>
              <SearchForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                value={this.state.searchTerm}
              />
            </div>
            {}
            <div className="col-12 col-md-9">
              <div className="row align-items-stretch">
                {}

                {!this.state.books.length ?
                  (<h1>Search Results...</h1>)
                  :
                  this.state.books.map(book => {
                    return (
                      <div className="col-12 col-md-6" key={book.id}>
                        <div className="card">
                          <h5 className="card-header">{book.title}</h5>
                          <img src={book.image} alt={book.title} className="card-img" />
                          <div className="card-body">
                            <h6 className="card-subtitle">By {book.authors.join(" & ")}</h6>
                            <p>{book.description}</p>
                            <div className="btn-group" role="group">
                              <button type="button" className="btn" onClick={() => this.saveBook(book.id)}>Save Book</button>
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
        </div>

      </div>
    )
  }
}

export default Search;