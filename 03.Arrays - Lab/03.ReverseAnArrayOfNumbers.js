function reversedNum (num , inputArr){
    let arr = []
    for(let i = num - 1; i >= 0 ; i--){
        const element = inputArr[i]
        arr.push(element)
    }
    console.log(arr.join(" "))
}
reversedNum(3, [10, 20, 30, 40, 50])
