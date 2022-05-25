import React, { useState, useEffect } from 'react';
import apiBooks from './FetchingData/APIBook';
import DisplayBooks from './AllBooks/DisplayBooks';
function Library() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        apiBooks(setBooks)
    }, [])
    return (
        <>
        <DisplayBooks setBooks={setBooks} books={books}/>
        </>
    )
}
export default Library;