import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import UserBookList from "./UserBookList";
import SearchCount from "./SearchCount";
import quoteImg from '../images/book_quote.jpg'

const getDatafrmLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

const UserPage = () => {

  const [books, setBooks] = useState(getDatafrmLS);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [searchTerm, setSearchTerm] = useState('');
  //const [isSearch, setSearchFlag] = useState(false);

  const lendBook = (bookID) => {
    setBooks(
      books.map((book) => {
        if (book.bookID === bookID) {
          return { ...book, available: false }
        }
        return book;
      })
    );
    showAlert(true, "success", "Success! You have blocked the book to lend. Please come and collect the book");
  };

  const searchBook = (e) => {
    setSearchTerm(e.target.value)
    //setSearchFlag(true);
  };

  const showAlert = (show, type, msg) => {
    setAlert({ show, type, msg });
  };

  const applyFilter = searchTerm => book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase());

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <div className="container">
      <div className="p-3 my-1 bg-light rounded-3">
        <div className="row">
          <div className="col-md-6">
            <img src={quoteImg} className="img-fluid" alt="library"/>
          </div>
          <div className="col-md-6">
            <p>"Books have the power to transport us to new worlds and different times, but they can also take us back to the important moments in our own lives."</p>
            <div className="search-container">
              <h5> Search Books in the Book Shelf </h5>
              <input type="text" placeholder="Search book title...." onChange={searchBook} />
              <SearchCount books={books.filter(applyFilter(searchTerm))}/>
            </div>
          </div>
        </div>


        <div className="main">

          <div className="view-container pt-4">
            <h5> Book Shelf:</h5>
            <div className="panel pt-3">
              {books.length < 1 && <div className="alert alert-warning">No Books are available to lend</div>}
              {alert.show && <Alert {...alert} removeAlert={showAlert} books={books} />}
            </div>
            <div className="panel">
              {books.length > 0 &&
                <div className='table-responsive'>
                  <table className="table">
                    <thead className="bg-info">
                      <th>Book ID</th>
                      <th>Book Title</th>
                      <th>Book Author</th>
                      <th>Book Availability</th>
                      <th>Lend</th>
                    </thead>
                    <tbody>
                      <UserBookList books={books.filter(applyFilter(searchTerm))} lendBook={lendBook}/>
                    </tbody>
                  </table>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;