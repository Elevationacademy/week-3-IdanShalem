const fetch = function (queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            for(let book of data.items){
                console.log(book.volumeInfo.title)
                console.log(book.volumeInfo.authors)
                console.log(book.volumeInfo.industryIdentifiers)
            }
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

fetch("title", "How to Win Friends and Influence People")
