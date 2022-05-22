import "./DisplayBooks.css"
import DisplaySingleBook from "./DisplaySingleBook"
function DisplayBooks({books}) {
    return (
        <>
            {books && (
                <div className="booksContainer">{books.items.map((singleBook, index) => {
                    return <DisplaySingleBook books={books} singleBook={singleBook} index={index} key={index}/>
                })}</div>
            )}
        </>
    )
}
export default DisplayBooks




