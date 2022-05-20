import React, { useState, useEffect } from 'react';
import apiBooks from './APIBook';
function DisplayBook() {
    const [books, setBooks] = useState(null);
    useEffect(() => {
        apiBooks(setBooks)
    }, [])

    return (
        <>
            {books && (
                <p>{books.kind}</p>
            )}

        </>
    )

}
export default DisplayBook;