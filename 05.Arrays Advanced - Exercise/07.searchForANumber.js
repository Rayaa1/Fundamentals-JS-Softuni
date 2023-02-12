function searchingNumber (arr , commands){
    let lengthNum = commands[0]
    let takenNum = arr.slice(0,lengthNum)
    let deleteNum = commands[1]
    let searchNum = commands[2]
    let count = 0
    takenNum.splice(0,deleteNum)
    for(let i = 0 ; i < takenNum.length ; i++){
        let currentNum = takenNum[i]
        if(currentNum === searchNum){
            count += 1
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`)
}
searchingNumber([5, 2, 3, 4, 1, 6], [5, 2, 3])