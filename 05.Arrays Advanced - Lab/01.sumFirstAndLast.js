function sumFirstAndLastElement (arr){
    let firstElement = Number(arr.shift())
    let lastElement = Number(arr.pop())
    let sum = firstElement + lastElement
    return sum
}
console.log(sumFirstAndLastElement(['20', '30', '40']))
