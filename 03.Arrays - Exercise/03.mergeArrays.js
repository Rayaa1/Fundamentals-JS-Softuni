function mergeArrays (firstArr , secondArr){
    let result = []
    for(let i = 0 ; i < firstArr.length ; i++){
        let firstWord = firstArr[i]
        let secondWord = secondArr[i]
        if(i % 2 == 0){
        firstWord = Number(firstWord)
        secondWord = Number(secondWord)
        }
        let currentResult = firstWord + secondWord
        result.push(currentResult)
    }
    console.log(result.join(" - "))

}
mergeArrays(["13", "12312", "5", "77", "4"],
["22", "333", "5", "122", "44"])