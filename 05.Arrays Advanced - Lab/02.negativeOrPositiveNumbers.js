function negativeOrPositive (arr){
    let newArr = []
    for(let element of arr){
       element =  Number(element)
        if(element < 0){
            newArr.unshift(element)
        }else{
            newArr.push(element)
        }
    }
    return newArr.join("\n")

}
console.log(negativeOrPositive(['3', '-2', '0', '-1']))