const wisdom = JSON.parse(localStorage.wisdom || '[]')
let idCounter = wisdom.length

$('#append').on('click', function(){
    idCounter++
    const text = $('#inpt').val()
    $('#disp').append(`<div data-id='${idCounter}'><p>${text}<p><button class='delete'>X</button></div>`)
    wisdom.push({text, id: idCounter})
    if(wisdom.length % 2 == 0){
        localStorage.wisdom = JSON.stringify(wisdom)
    }
    $('#inpt').val('')
})

wisdom.forEach(t => {
    $('#disp').append(`<div data-id='${t.id}'><p>${t.text}</p><button class='delete'>X</button></div>`)
});

$('#clear').on('click', function(){
    localStorage.clear()
    idCounter = 0
    $('#disp').empty()
})

$('#disp').on('click', '.delete', function(){
    const div = $(this).closest('div').data().id
    const i = wisdom.findIndex(t => t.id == div)
    if(i >= 0){
        wisdom.splice(i, 1)
    }
    localStorage.wisdom = JSON.stringify(wisdom)
    $('#disp').empty()
    wisdom.forEach(t => {
        $('#disp').append(`<div data-id='${t.id}'><p>${t.text}</p><button class='delete'>X</button></div>`)
    });
})