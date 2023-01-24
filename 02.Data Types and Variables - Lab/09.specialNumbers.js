function solve(num) {
    for (let i = 1; i <= num; i++) {
        let numAsString = i.toString()
        let sum = 0
        for (let j = 0; j < numAsString.length; j++) {
            let charAsNumber = Number(numAsString[j])
            sum += charAsNumber

        }
        let isSpecial = (sum === 5 || sum === 7 || sum === 11)
            console.log(`${i} -> ${isSpecial ? "True" : "False"}`)
    }
}
solve(15)