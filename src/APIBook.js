const apiBooks = async (setBooks) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Hobbit')
        .then(response => response.json())
        .then((data) => {
            setBooks(data)
        })
}
export default apiBooks