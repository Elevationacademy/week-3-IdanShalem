const printUsers = function(user){
    console.log(`${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`)
}
$.ajax({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/users`,
    success: function (data) {
        console.log(data.map(u => {return{email: u.email, companyName: u.company.name}}))
        console.log(data.filter(z => z.address.zipcode[0] == 5).map(i => i.id))
        console.log(data.map(n => n.name).filter(s => s[0] === 'C'))
        console.log(data.every(a => a.address.city === 'South Christy'))
        console.log(data.find(u => u.address.suite === 'Apt. 950').company.name)
        data.forEach(printUsers);
    }
})
        