function solve(start, end) {
    let sum = 0
    let number = " "
    for (start ; start <= end ; start++) {
        sum += start
        number += start + " "
    }
    console.log(number)
    console.log(`Sum: ${sum}`)
}


