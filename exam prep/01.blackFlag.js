function blackFlag(input){
    input = input.map(Number)
    let days = input.shift()
    let dailyPlunder = input.shift()
    let expectedPlunder = input.shift()
    let totalPlunder = 0
    for(let i = 1 ; i <= days ; i++){
        totalPlunder += dailyPlunder
        if(i % 3 == 0){
           totalPlunder += dailyPlunder * 0.5 
        }
        
        if(i % 5 == 0){
            totalPlunder *= 0.70
        }
    }
    if(totalPlunder >= expectedPlunder){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    }else {
        let percent = totalPlunder / expectedPlunder * 100
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`)
    }
}
blackFlag(["10",
"20",
"380"])

//The days are 5, and the daily plunder is 40. 
//On the third day, the total plunder is 120, and since it is a third day,
// they gain an additional 50% from the daily plunder, which adds up to 140.
// On the fifth day, the plunder is 220, but they battle with a warship and lose 30% of the collected
// cargo, and the total becomes 154. That is more than expected.
