import '../../styles/stylesLibrary.css';
import Description from './Description';
import AddBookToYourLibrary from './AddBookToYourLibrary';
function DisplaySingleBook({ setAddedBooksToYourLibrary, singleBook, index, books, setBooks, addedBooksToYourLibrary, inputForSearchBookValue }) { 
    return (
        <>
            {singleBook.volumeInfo.title.toLowerCase().includes(inputForSearchBookValue) &&
                <div className="singleBookContainer" key={index}>
                    {"imageLinks" in singleBook.volumeInfo && ((
                        <img className="imageOfBooks" alt="booksImage" src={singleBook.volumeInfo.imageLinks.thumbnail}></img>
                    ))}
                    <p className="classic-paragraph" > Title:  {singleBook.volumeInfo.title} </p>
                    <p className="classic-paragraph"> Date of publication: {singleBook.volumeInfo.publishedDate}</p>

                    {"description" in singleBook.volumeInfo && (
                        <>
                            <p className="classic-paragraph">Description:</p>
                            <Description bookDescription={singleBook.volumeInfo.description} shortedDescription={singleBook.volumeInfo.shortDescription} />

                        </>
                    )}
                    <AddBookToYourLibrary addedBooksToYourLibrary={addedBooksToYourLibrary} setAddedBooksToYourLibrary={setAddedBooksToYourLibrary} setBooks={setBooks} books={books} index={index} />
                </div>}
        </>
    )
}
export default DisplaySingleBook;