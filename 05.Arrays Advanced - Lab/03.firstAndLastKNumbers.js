function firstAndLastKNum(input){
    let count = input.shift()
    let firstElement = input.slice(0,count)
    let lastElement = input.slice(input.length - count)
    console.log(firstElement.join(" "))
    console.log(lastElement.join(" "))

}
firstAndLastKNum([2, 
    7, 8, 9])
    