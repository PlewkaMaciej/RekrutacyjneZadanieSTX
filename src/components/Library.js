import React, { useState, useEffect } from 'react';
import apiBooks from './APIBook';
import DisplayBooks from './DisplayBooks';
function Library() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        apiBooks(setBooks)
    }, [])

    return (
        <>
           <DisplayBooks books={books}/>

        </>
    )

}
export default Library;