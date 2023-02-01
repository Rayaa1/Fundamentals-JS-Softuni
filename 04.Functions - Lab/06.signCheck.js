function signCheck(numOne, numTwo, numThree) {
    let arr = [numOne, numTwo, numThree]
    let counter = 0
    for (let element of arr) {
        if (element < 0) {
            counter += 1
        }
    }
    if (counter == 2 || counter == 0) {
        console.log("Positive")
    } else {
        console.log("Negative")
    }
}
signCheck(1, 2, -2)

