function solve (input){
    let students = Number(input.shift())
    let lectures = Number(input.shift())
    let additionalBonus = Number(input.shift())
    let totalBonus = 0
    let biggestNum = 0
    let newArr = []

    for(let el= 0 ; el < input.length ; el++){
        let toNum = Number(input[el])
        newArr.push(toNum)
        if(toNum > biggestNum || el == 0){
            biggestNum = toNum
            totalBonus = toNum / lectures * (5 + additionalBonus)
        }
    }
   // newArr.sort((a,b) => b - a).splice(1,newArr.length)
    //totalBonus = newArr / lectures * ( 5 + additionalBonus)
    console.log(`Max Bonus: ${Math.round(totalBonus)}.\nThe student has attended ${biggestNum} lectures.`)
}
solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])



  
  