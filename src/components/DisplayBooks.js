import "./DisplayBooks.css"
import DisplaySingleBook from "./DisplaySingleBook"
import ShowBooksFromYourLibrary from "./ShowBooksFromYourLibrary"
import { useEffect, useState } from 'react';
function DisplayBooks({books,setBooks}) {
    const [addedBooksToYourLibrary, setAddedBooksToYourLibrary] = useState([]);
    useEffect(()=>{
    },[addedBooksToYourLibrary])
    return (
        <>
            {books && (
                <>
            
                <div className="booksContainer">{books.items.map((singleBook, index) => {
                    return <DisplaySingleBook setAddedBooksToYourLibrary={setAddedBooksToYourLibrary} addedBooksToYourLibrary={addedBooksToYourLibrary}  setBooks={setBooks} books={books} singleBook={singleBook} index={index} key={index}/>
                })}
               <ShowBooksFromYourLibrary addedBooksToYourLibrary={addedBooksToYourLibrary}/>
                </div>
                </>
            )}
        </>
    )
}
export default DisplayBooks




