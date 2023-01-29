function sumOfArrays(arr) {
    let currArr = arr
    while (currArr.length > 1) {
        let newArr = []
        for (let i = 0; i < currArr.length - 1; i++) {
            let firstArr = currArr[i]
            let secondArr = currArr[i + 1]
            newArr.push(firstArr + secondArr)
        }
        currArr = newArr
    }
    console.log(currArr[0])
}

sumOfArrays([2, 10, 3])