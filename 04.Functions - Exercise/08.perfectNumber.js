function perfectNumber(num) {
    let result = 0
    let isPerfect = false
    for (let i = 0; i < num; i++) {
        divisor(i)

    }
    perfectOrNot(num, result)

    function divisor(i) {
        if (num % i == 0) {
            result += i
        }
        return result
    }

    function perfectOrNot(num, result) {
        if (num === result) {
            isPerfect = true
        }
        return isPerfect
    }
    console.log(isPerfect ? 'We have a perfect number!' : "It's not so perfect." )
}
perfectNumber(6)