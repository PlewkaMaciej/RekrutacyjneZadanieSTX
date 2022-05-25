const apiBooks = async (setBooks) => {

    Promise.all([
        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=search+terms ',

        ).then((res1) => res1.json()),
        fetch(
            'https://www.googleapis.com/books/v1/volumes?q=Hobbit',

        ).then((res2) => res2.json()),
    ])
        .then(([result1, result2]) => {
            let items = result1.items.concat(result2.items)
            let newData = { items: items }
            newData.items.forEach((element, index) => {
                newData.items[index].volumeInfo.isInYourLibrary=false
                if (element.volumeInfo.description !== undefined) {
                    newData.items[index].volumeInfo.shortDescription = element.volumeInfo.description.substring(0, 200)
                }
            })
            setBooks(newData)
        })
        .catch((error) => console.log("error", error));

}
export default apiBooks