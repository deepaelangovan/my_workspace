import React from "react";

const UserBookList =({books,lendBook})=>{
    return books.map(book=>(
        <tr key={book.bookID}>
            <td>{book.bookID}</td>
            <td>{book.title}</td>
            <td>{book.bookAuthor}</td>
            <td>{book.available ? "Yes" : "No"}</td>
            <td>{book.available ? <button className="btn btn-info btn-sm" onClick={()=>lendBook(book.bookID)}>Lend Book</button> : "Not Available"}</td>
        </tr>
    ))
}

export default UserBookList;
