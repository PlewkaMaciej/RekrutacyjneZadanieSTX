import '../../styles/stylesLibrary.css';

function AddBookToYourLibrary({ setBooks, books, index, setAddedBooksToYourLibrary, addedBooksToYourLibrary }) {
    const newBooks = books
    const addToLibrary = (e) => {
        newBooks.items[e.target.id].volumeInfo.isInYourLibrary = true
        setBooks(newBooks)
        setAddedBooksToYourLibrary(prevAddedBooksToYourLibrary => [...prevAddedBooksToYourLibrary, { title: newBooks.items[e.target.id].volumeInfo.title, id: newBooks.items[e.target.id].id }])
    }
    const deleteFromLibrary = (e) => {

        newBooks.items[e.target.id].volumeInfo.isInYourLibrary = false
        setBooks(newBooks)
        const yourFavBooks = addedBooksToYourLibrary.filter(((val) => {
            return val.id !== newBooks.items[e.target.id].id
        }))
        setAddedBooksToYourLibrary(yourFavBooks)
    }
    return (
        <>
            {newBooks.items[index].volumeInfo.isInYourLibrary === false &&
            
                <button variant="primary" id={index}  className="add-to-library-button" onClick={addToLibrary}>Add to your library</button>
            }
            {newBooks.items[index].volumeInfo.isInYourLibrary === true &&
                <button variant="primary" id={index}  className='delete-to-library-button' onClick={deleteFromLibrary}>Delete from your library</button>
            }
        </>
    )
}
export default AddBookToYourLibrary;