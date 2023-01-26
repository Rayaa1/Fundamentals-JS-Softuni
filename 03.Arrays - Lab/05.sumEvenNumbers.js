function sumEvenNum (arr){
    let sum = 0
    let num = 0
    for(let i = 0 ; i < arr.length ; i++){
        num = Number(arr[i])
        if(num % 2 == 0){
            sum += num
        }

    }
    console.log(sum)
}
sumEvenNum(['2','4','6','8','10'])