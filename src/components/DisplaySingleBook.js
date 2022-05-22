import Description from './Description';

function DisplaySingleBook({ singleBook, index, books }) {
  
    return (
        <div className="singleBookContainer" key={index}>
            {"imageLinks" in singleBook.volumeInfo && ((
                <img className="imageOfBooks" alt="booksImage" src={singleBook.volumeInfo.imageLinks.thumbnail}></img>
            ))}
            <p className="classic-paragraph" > Title:  {singleBook.volumeInfo.title} </p>
            <p className="classic-paragraph"> Date of publication: {singleBook.volumeInfo.publishedDate}</p>

            {"description" in singleBook.volumeInfo && (
                <>
                    <p className="classic-paragraph">Description:</p>
                    <Description bookDescription={singleBook.volumeInfo.description} shortedDescription={singleBook.volumeInfo.shortDescription}/>
                </>
            )}

        </div>
    )
}
export default DisplaySingleBook;