function oddAndEvenSum (num){
    let oddSum = 0
    let evenSum = 0
    let digits = num.toString()
    for(let i of digits){
        a = Number(oddOrEvenNum(i))

    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
    function oddOrEvenNum (a){
        let toNum = Number(a)
        if(toNum % 2 == 0){
            evenSum += toNum
            return evenSum
        }else {
            oddSum += toNum
            return oddSum
        }
        
    }
}
oddAndEvenSum(1000435)