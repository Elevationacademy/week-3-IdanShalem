// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }

// const source = $('#class-template').html()
// const template = Handlebars.compile(source)

// const newHTML = template(classData)

// $('#classmates').append(newHTML)

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderAnimals = function(){
    const source = $('#animals').html()
    const template = Handlebars.compile(source)
    const newHTML = template({animals})
    return newHTML
}

const renderLanguages = function(){
    const source = $('#languages').html()
    const template = Handlebars.compile(source)
    const newHTML = template({languages})
    return newHTML
}

$('#animals-cont').append(renderAnimals())
$('#languages-cont').append(renderLanguages())
