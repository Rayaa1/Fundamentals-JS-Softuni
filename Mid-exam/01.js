function burgerBus(input){
    let cities = Number(input.shift())
    let totalSum = 0
    let totalProfit = 0
 
    for(let i = 1 ; i <= cities ; i++){ 
        let nameOfCity = input.shift()
        let moneyEarned = Number(input.shift())
        let expenses = Number(input.shift())
       
        if(i % 3 === 0 && i % 5 !== 0){
            expenses += expenses * 0.5 

        }else if(i % 5 === 0){
            moneyEarned *= 0.90

        }
        totalSum = moneyEarned - expenses
        totalProfit += totalSum
        

    console.log(`In ${nameOfCity} Burger Bus earned ${totalSum.toFixed(2)} leva.`)
    }
    console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)

}
burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])

