const nimi = "Helen"
const p = "10"
const k = "10"
const a = "1984"
const hobid = ["jalgrattasõit", "sisekujundus"];
let birthday = p + "." + k + "." + a
let about = {
    firstname: nimi, 
    birthday: birthday,  
    hobid: hobid
}
console.log(birthday)
console.log(about)

const date = new Date(1984,10,10);
console.log(date.getDate()+ '.' +date.getMonth()+ '.' + date.getFullYear())


