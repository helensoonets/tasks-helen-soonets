const nimi = "Helen"
const birthday = new Date(1984, 10, 10);
const hobid = ["jalgrattasõit", "sisekujundus"];
const formattedbirthday = birthday.getDate() + "." + birthday.getMonth() + "." + birthday.getFullYear()
const info = {
    firstname: nimi, 
    birthday: formattedbirthday,  
    hobid: hobid
}
console.log(info)
console.log(formattedbirthday)
