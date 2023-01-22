function roudingNum(num,precision){
    if(precision > 15){
        precision = 15
    }
    let numRounded = Number(num).toFixed(precision)
    console.log(parseFloat(numRounded))
}