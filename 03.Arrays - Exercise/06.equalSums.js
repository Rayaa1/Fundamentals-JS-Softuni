function equalSums (arr){
    let foundIndex = "no"
    let arrLength = arr.length

    for(let i = 0 ; i < arrLength ; i++){
        let leftSum = 0
        let rightSum = 0
        for(let j = 0 ; j < i ; j++){
            leftSum += arr[j]
        }
        for(let k = i + 1 ; k < arrLength ; k++){
            rightSum += arr[k]
        }
        if(rightSum === leftSum){
            foundIndex = i
        }
    }
    console.log(foundIndex)
}