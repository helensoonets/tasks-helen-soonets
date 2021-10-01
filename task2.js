const name = "Helen"
const birthday = new Date(1984, 10, 10);
const hobbies = ["travelling", "interior design"];
const formattedbirthday = birthday.getDate() + "." + birthday.getMonth() + "." + birthday.getFullYear()
const info = {
    firstname: name, 
    birthday: formattedbirthday,  
    hobbies: hobbies
}
console.log(info)
console.log(formattedbirthday)
