import "../../styles/stylesLibrary.css";
import DisplaySingleBook from "../SingleBook/DisplaySingleBook";
import ShowBooksFromYourLibrary from "./ShowBooksFromYourLibrary";
import { useEffect, useState } from "react";
function DisplayBooks({ books, setBooks }) {
  const [addedBooksToYourLibrary, setAddedBooksToYourLibrary] = useState([]);
  const [inputForSearchBookValue, setInputForSearchBookValue] = useState([]);
  const [page_Num, setPage_Num] = useState(15);
  useEffect(() => {
    window.addEventListener("scroll", loadBooks);
  }, [addedBooksToYourLibrary]);
  const inputTextChange = (e) => {
    setInputForSearchBookValue(e.target.value.toLowerCase());
  };

  const loadBooks = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setPage_Num((page_Num) => page_Num + 1);
    }
  };
  return (
    <>
      {books && (
        <>
          <div className="booksContainer">
            <label className="searchForInput" htmlFor="searchBook">
              Search for a book by title
            </label>

            <input
              onChange={inputTextChange}
              type="text"
              id="searchBook"
              size="40"
            ></input>
            {books.items.map((singleBook, index) => {
             if(page_Num>index){
                return (
                    <DisplaySingleBook
                      inputForSearchBookValue={inputForSearchBookValue}
                      setAddedBooksToYourLibrary={setAddedBooksToYourLibrary}
                      addedBooksToYourLibrary={addedBooksToYourLibrary}
                      setBooks={setBooks}
                      books={books}
                      singleBook={singleBook}
                      index={index}
                      key={index}
                    />
                  );
             }
             else{
                 return null
             }
            })}
            <ShowBooksFromYourLibrary
              addedBooksToYourLibrary={addedBooksToYourLibrary}
            />
          </div>
        </>
      )}
    </>
  );
}
export default DisplayBooks;