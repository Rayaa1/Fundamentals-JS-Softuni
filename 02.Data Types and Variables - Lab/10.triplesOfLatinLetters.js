function solve(num) {
    for (let i = 1; i <= num; i++) {
        for (let k = 1; k <= num; k++) {
            for (let j = 1; j <= num; j++) {
                let firstLetter = String.fromCharCode(96 + i)
                let secondLetter = String.fromCharCode(96 + k)
                let thirdLetter = String.fromCharCode(96 + j)
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`)
            }
        }
    }
}

solve(3)