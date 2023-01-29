function addAndSubtract (arr){
    let originalNumSum = 0
    let changedNumSum = 0
    for(let i = 0 ; i < arr.length ; i++){
        let currentArr = Number(arr[i])
        originalNumSum += arr[i]
        if(currentArr % 2 == 0){
          currentArr += i
          arr[i] = currentArr
          changedNumSum += arr[i]
        }else {
            currentArr -= i
            arr[i] = currentArr
            changedNumSum += arr[i]
        }
    }
    console.log(arr)
    console.log(originalNumSum)
    console.log(changedNumSum)
}
addAndSubtract([5, 15, 23, 56, 35])