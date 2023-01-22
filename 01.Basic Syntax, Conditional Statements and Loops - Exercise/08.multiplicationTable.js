function solve(num) {
    let times = 1
    while (times <= 10) {
        let sum = num * times
        console.log(`${num} X ${times} = ${sum}`)
        times++
    }
}