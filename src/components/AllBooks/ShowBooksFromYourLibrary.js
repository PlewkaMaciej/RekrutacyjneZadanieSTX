import '../../styles/stylesLibrary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function ShowBooksFromYourLibrary({ addedBooksToYourLibrary }) {
    return (
        <>
            <div className="your-books-container">
                <p className="your-books-paragraph">Your Books:</p>
                {addedBooksToYourLibrary.map((val, index) => {
                    return <p className="your-added-books-paragraph" key={index}>{val.title},</p>
                })}
            </div>
        </>
    )
}
export default ShowBooksFromYourLibrary;
