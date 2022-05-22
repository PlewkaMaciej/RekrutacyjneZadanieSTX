import "./DisplayBooks.css"
import DisplaySingleBook from "./DisplaySingleBook"
import React, { useEffect } from 'react';
function DisplayBooks({ books}) {
    useEffect(()=>{
        console.log(DisplaySingleBook)
    })
    return (
        <>
            {books && (
                <div className="booksContainer">{books.items.map((SingleBook, index) => {
                    return <DisplaySingleBook SingleBook={SingleBook} index={index} key={index}/>
                })}</div>
            )}
        </>
    )
}
export default DisplayBooks




// a picture of the book cover
// the title of the book
// the year of books publication
// the books description (it should be shortened to 200 characters if needed, ... should be displayed at the end if it was shortened).