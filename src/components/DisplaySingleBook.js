function DisplaySingleBook({SingleBook,index}){
    return(
        <div className="singleBookContainer" key={index}>
                        {"imageLinks" in SingleBook.volumeInfo && ((
                            <img className="imageOfBooks" alt="booksImage" src={SingleBook.volumeInfo.imageLinks.thumbnail}></img>
                        ))}
                        <p className="classic-paragraph" > Title:  {SingleBook.volumeInfo.title} </p>
                        <p className="classic-paragraph"> Date of publication: {SingleBook.volumeInfo.publishedDate}</p>

                        {"description" in SingleBook.volumeInfo && (
                            <>
                                <p className="classic-paragraph">Description:</p>
                                <p   className="description-paragraph">  {SingleBook.volumeInfo.description}</p>
                            </>
                        )}

                    </div>
    )
}
export default DisplaySingleBook;