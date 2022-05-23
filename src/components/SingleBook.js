function  SingleBook({book,index}){
    return(
        <div className="singleBookContainer" key={index}>
        {"imageLinks" in book.volumeInfo && ((
            <img className="imageOfBooks" alt="booksImage" src={book.volumeInfo.imageLinks.thumbnail}></img>
        ))}
        <p className="classic-paragraph" > Title:  {book.volumeInfo.title} </p>
        <p className="classic-paragraph"> Date of publication: {book.volumeInfo.publishedDate}</p>

        {"description" in book.volumeInfo && (
            <>
                <p className="classic-paragraph">Description:</p>
                <p className="description-paragraph">  {book.volumeInfo.description}</p>
            </>
        )}

    </div>
    )
}
export default SingleBook;