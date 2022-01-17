import React, { useState, useEffect } from "react";
import Alert from "./Components/Alert";
import View from './Components/View';
//import uuid from "uuid";

const getDatafrmLS = () => {
  const data = localStorage.getItem('books');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
//const uniqueID = Date.now();
const App = () => {

  const [title, setTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookID, setBookID] = useState('');
  const [available, setAvailablity] = useState(false);
  const [books, setBooks] = useState(getDatafrmLS);
  const [editID, setEditID] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setBooks(
        books.map((book) => {
          if (book.bookID === editID) {
            return { ...book, title: title, bookAuthor: bookAuthor, available: available }
          }
          return book;
        })
      );
      setTitle('');
      setBookAuthor('');
      setAvailablity(false);
      setBookID('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Book Details updated!");
    } else {
      let book = {
        title,
        bookAuthor,
        available,
        bookID: Date.now()
      }
      showAlert(true, "success", "Book Added!");
      setBooks([...books, book]);
      setTitle('');
      setBookAuthor('');
      setAvailablity(false);
      setBookID('');
    }
  };
  const showAlert = (show, type, msg) => {
    setAlert({ show, type, msg });

  };

  const deleteBook = (bookID) => {
    const filteredBooks = books.filter((element, index) => {
      return element.bookID !== bookID
    })
    showAlert(true, "danger", "Book Removed!");
    setBooks(filteredBooks);
  }

  const deleteAllBooks = () => {
    showAlert(true, "danger", "All Books has been Removed!");
    setBooks([]);
  }

  const updateBook = (bookID) => {
    console.log("update" + bookID);
    const editBook = books.find((item) => {
      return item.bookID === bookID
    }
    )
    setIsEditing(true);
    setEditID(bookID);
    setTitle(editBook.title);
    setBookAuthor(editBook.bookAuthor);
    setAvailablity(editBook.available);
  }

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books])
  return (
    <div className="container">
      <div className="p-3 my-1 bg-light rounded-3">
        <h4>Add Books in the Library List</h4>
        <div className="main">
          <div className="section-center">
            <form className="form-group" onSubmit={handleAddBookSubmit}>
              {alert.show && <Alert {...alert} removeAlert={showAlert} books={books} />}
              <label><strong>Book Title</strong></label>
              <div className="mb-3 form">
                <input type="text" name="bookTitle" required className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <label><strong>Book Author</strong></label>
              <div className="mb-3 form">
                <input type="text" name="bookAuthor" required className="form-control" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} />
              </div>
              <div className="form-checkbox">
                <input name="available" checked={available} onChange={(e) => setAvailablity(e.target.checked)} type="checkbox" />
                <label className="cBLabel">Book Available</label>              
              </div>
              <div className="form">
                <button type="submit" className="btn btn-success">{isEditing ? "Edit Book" : "Add Book"}</button>
              </div>
            </form>
          </div>
          <div className="view-container pt-4">
            <h4>List of Books:</h4>
            <div className="panel pt-4">
              {books.length < 1 && <div className="alert alert-warning">No Books are available to lend</div>}
            </div>
            <div className="panel">
              {books.length > 0 &&
                <div className='table-responsive'>
                  <table className="table">
                    <thead>
                      <th>Book ID</th>
                      <th>Book Title</th>
                      <th>Book Author</th>
                      <th>Book Available</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </thead>
                    <tbody>
                      <View books={books} updateBook={updateBook} deleteBook={deleteBook} />
                    </tbody>
                  </table>
                </div>}
            </div>
            <button className='btn btn-danger btn-md' onClick={() => deleteAllBooks()}>Remove All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;