const apiBooks = async (setBooks) => {
    fetch('https://www.googleapis.com/books/v1/volumes?q=Hobbit')
        .then(response => response.json())
        .then((data) => {
            let newData = data
            newData.items.forEach((element, index) => {
                newData.items[index].isInYourLibrary=false
                if (element.volumeInfo.description !== undefined) {
                    newData.items[index].volumeInfo.shortDescription = element.volumeInfo.description.substring(0, 200)
                }
            })

            setBooks(newData)
        })
}
export default apiBooks