const favoriteGifs = []
$('#submit').on('click', function(){
    fetch($('#search').val())
    $('#search').val('')
})

const fetch = function (search) {
    const src = $('#gifs-t').html()
    const template = Handlebars.compile(src)
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=GBYLPaC6wi5ewmHAkiKK2MYraKvHpYa5&q=terms:${search}`,
        success: function (data) {
            $('#gifs').empty()
            const embedURLs = data.data.map(function(gif, index){
                if(index < 5){
                    return gif.embed_url
                }
            }) 
            const newHTML = template({embedURLs})
            $('#gifs').append(newHTML)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

$('#gifs').on('click', '.add', function(){
    favoriteGifs.push($(this).closest('.gif').find('iframe').attr('src'))
    $('#gifs').empty()
})

$('#favs').on('click', function(){
    $('#gifs').empty()
    const src = $('#fav-gifs-t').html()
    const template = Handlebars.compile(src)
    const newHTML = template({favoriteGifs})
    $('#gifs').append(newHTML)
})