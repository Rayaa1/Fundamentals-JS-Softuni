function maxNum (arr){
    let resultArr = []
    for(let i = 0; i < arr.length ; i++){
        let isBigger = true
        let currentNum = arr[i]
        for(let j = i + 1 ; j < arr.length ; j++){
            if(currentNum <= arr[j]){
                isBigger = false;
            }
        }
        if(isBigger){
            resultArr.push(arr[i])
        }
    }
    console.log(resultArr.join(" "))
}
maxNum([1, 4, 3, 2])