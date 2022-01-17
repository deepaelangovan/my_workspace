import React from "react";
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
import {FaEdit, FaTrash} from "react-icons/fa"


const View =({books,deleteBook,updateBook})=>{
    return books.map(book=>(
        <tr key={book.bookID}>
            <td>{book.bookID}</td>
            <td>{book.title}</td>
            <td>{book.bookAuthor}</td>
            <td>{book.available ? "Yes" : "No"}</td>
            <td className="edit-btn" onClick={()=>updateBook(book.bookID)}><FaEdit/></td>
            <td className="delete-btn" onClick={()=>deleteBook(book.bookID)}><FaTrash/></td>
        </tr>
    ))
}

export default View;