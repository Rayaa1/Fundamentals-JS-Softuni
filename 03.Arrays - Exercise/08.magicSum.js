function magicSum (arr,sum){
    for(let i = 0 ; i < arr.length ; i++){
        let currentNum = Number(arr[i])
        
        for(let j = 1 ; j < arr.length ; j++){
            let secondNum = Number(arr[j])
            let total = currentNum + secondNum
            if(total === sum && i < j){
                console.log(`${currentNum} ${secondNum}`)
            }
        }
    
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)