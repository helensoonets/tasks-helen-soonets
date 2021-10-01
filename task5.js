let str = "";
function checkstring(str) {
    if(str) {
        return true;
    }else{
        return false;
    }
}

function uppercase(str) {
    if(str){
        return str.charAt (0).toUpperCase() + str.slice(1);
    }else{
        return '""';
    }
}

console.log(checkstring());
console.log(checkstring("tere"));
console.log(checkstring ("minu nimi on John"));
console.log(uppercase());
console.log(uppercase("tere"));
console.log (uppercase("minu nimi on John"));