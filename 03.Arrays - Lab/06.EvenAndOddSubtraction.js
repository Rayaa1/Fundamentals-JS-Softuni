function evenAndOdd (arr){
    let oddSum = 0
    let evenSum = 0
    let num = 0
    for(let i = 0 ; i < arr.length ; i ++){
        num = Number(arr[i])
        if(num % 2 == 0){
            evenSum +=num
        }else {
            oddSum += num
        }
    }
    console.log(evenSum - oddSum)
}
evenAndOdd([1,2,3,4,5,6])