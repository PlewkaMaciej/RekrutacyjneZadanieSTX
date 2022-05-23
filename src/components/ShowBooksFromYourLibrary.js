
import "./DisplayBooks.css";
function ShowBooksFromYourLibrary({addedBooksToYourLibrary}){

    return(
        <>
<div className="your-books-container">
    <p className="your-books-paragraph">Your Books:</p>
        {addedBooksToYourLibrary.map((val,index)=>{
         return  <p className="your-books-paragraph" key={index}>{val.title}</p>
        })}
     </div>
     </>
    )
}
export default ShowBooksFromYourLibrary;
