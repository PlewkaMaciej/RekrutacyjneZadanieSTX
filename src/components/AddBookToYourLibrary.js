import { useState } from 'react';
import  './DisplayBooks.css';
function AddBookToYourLibrary({setBooks,books,index}){
    const newBooks=books
    const [isBookInYourLibrary, setBookToYourLibrary] = useState(false);
    const addToLibrary=(e)=>{
        
        newBooks.items[e.target.id].isInYourLibrary=true
        setBooks(newBooks)
        setBookToYourLibrary(true)
    }
    const deleteFromLibrary=(e)=>{
        setBookToYourLibrary(false)
        newBooks.items[e.target.id].isInYourLibrary=false
        setBooks(newBooks)
    }
return(
<>

{isBookInYourLibrary===false&&
    <button id={index} className="add-to-library-button" onClick={addToLibrary}>Add to your library</button>
}
{isBookInYourLibrary===true&&
    <button id={index}  className='delete-to-library-button' onClick={deleteFromLibrary}>Delete from your library</button>
}
</>
)
}
export default AddBookToYourLibrary;