import React from "react";

const SearchCount =({books})=>{
    return (
        <div className="panel pt-2">           
           {books.length === 0 && <div className="alert alert-warning">No Books Found!</div>}
        </div>
    );
}

export default SearchCount;
