import "./DisplayBooks.css"
import DisplaySingleBook from "./DisplaySingleBook"
import ShowBooksFromYourLibrary from "./ShowBooksFromYourLibrary"
function DisplayBooks({books,setBooks}) {
    return (
        <>
            {books && (
                <>
                <ShowBooksFromYourLibrary books={books} />
                <div className="booksContainer">{books.items.map((singleBook, index) => {
                    return <DisplaySingleBook setBooks={setBooks} books={books} singleBook={singleBook} index={index} key={index}/>
                })}</div>
                </>
            )}
        </>
    )
}
export default DisplayBooks




