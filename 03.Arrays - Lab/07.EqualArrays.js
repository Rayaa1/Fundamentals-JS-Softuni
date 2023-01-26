function equalArray(arr1, arr2) {
    let sumArr = 0
    let isEqual = true
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i])
        sumArr += Number(arr1[i])
        arr2[i] = Number(arr2[i])
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`)
            isEqual = false
            break;
        }
    }
    if (isEqual == true) {
        console.log(`Arrays are identical. Sum: ${sumArr}`)
    }
}
equalArray(['10','20','30'],['10','20','30'])

