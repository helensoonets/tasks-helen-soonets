function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
  }
  var random_num = getRandomNum(1, 100);
console.log(random_num);

var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

function getArrayMax(arr){
    return Math.max.apply(null, arr);
}
var maxNumber=getArrayMax(arr);
console.log(maxNumber)

function getArrayMin(arr){
    return Math.min.apply(null, arr);
}
var minNumber=getArrayMin(arr);
console.log(minNumber)

function even(arr) {
    const bool = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            bool.push(true)
        }
    }
    return bool.length
 }
 const evenNumber = even(arr)  
 console.log(evenNumber)