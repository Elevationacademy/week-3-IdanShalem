const neruoscienceComputerBooks = []
const fetch = function () {
    for (let i =0; i < 130; i+=40){
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=title:neuroscience&startIndex=${i}&maxResults=40`,
            success: function (data) {
                for(let book of data.items){
                    if(book.volumeInfo.categories){
                        if(book.volumeInfo.categories.includes('Computers')){
                            neruoscienceComputerBooks.push(book.volumeInfo.title)
                        }
                    }
                }
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
    
}

fetch()

