import "./DisplayBooks.css"
function DisplayBooks({ books }) {
    return (
        <>
            {books && (
                <div className="booksContainer">{books.items.map((SingleBook, index) => {
                    return <div className="singleBookContainer" key={index}>
                    {"imageLinks" in SingleBook.volumeInfo && ((
                            <img className="imageOfBooks" alt="booksImage" src={SingleBook.volumeInfo.imageLinks.thumbnail}></img>
                        ))}
                      <p className="classic-paragraph" > Title:  {SingleBook.volumeInfo.title} </p>
                       <p className="classic-paragraph"> Date of publication: {SingleBook.volumeInfo.publishedDate}</p>

                        {"description" in SingleBook.volumeInfo&&(
                            <>
                            <p className="classic-paragraph">Description:</p>
                            <p className="description-paragraph">  {SingleBook.volumeInfo.description}</p>    
                            </>
                        )}
                        
                    </div>
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