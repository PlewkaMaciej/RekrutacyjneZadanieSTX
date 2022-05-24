import '../../styles/stylesLibrary.css';
import DisplaySingleBook from "../SingleBook/DisplaySingleBook"
import ShowBooksFromYourLibrary from "./ShowBooksFromYourLibrary"
import { useEffect, useState } from 'react';
function DisplayBooks({ books, setBooks }) {
    const [addedBooksToYourLibrary, setAddedBooksToYourLibrary] = useState([]);
    const [inputForSearchBookValue, setInputForSearchBookValue] = useState([]);
    useEffect(() => {
    }, [addedBooksToYourLibrary])
    const inputTextChange=(e)=>{
      setInputForSearchBookValue(e.target.value.toLowerCase())
    }
    return (
        <>
            {books && (
                <>
                        <div className="booksContainer"> 
                        <label className="searchForInput" htmlFor="searchBook">Search for a book by title</label>

                    <input onChange={inputTextChange} type="text" id="searchBook" 
                         size="40"></input>
                        {books.items.map((singleBook, index) => {
                            return <DisplaySingleBook inputForSearchBookValue={inputForSearchBookValue} setAddedBooksToYourLibrary={setAddedBooksToYourLibrary} addedBooksToYourLibrary={addedBooksToYourLibrary} setBooks={setBooks} books={books} singleBook={singleBook} index={index} key={index} />
                        })}
                            <ShowBooksFromYourLibrary addedBooksToYourLibrary={addedBooksToYourLibrary} />
                        </div>
                    </>
            )}
                </>
            )
            }
            export default DisplayBooks




