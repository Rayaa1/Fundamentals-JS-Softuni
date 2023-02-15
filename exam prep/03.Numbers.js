function solve (num){
    let count = 0
    let sum = 0
    let arr = num.split(' ').map(Number)

    for(let i = 0 ; i < arr.length ; i++){
        count++
        sum += arr[i]
    }
    let avg = sum / count
   let result = []
   for(let el of arr){
    if(el > avg){
        result.push(el)
    }
   }
   result.sort((a,b) => b - a)
   let buff = ""
   for(let i = 0 ; i< 5 ;i++){
    if(result[i]){
        buff += result[i] + " "
    }
   }
   if(buff.length == 0){
    console.log("No")
   }else {
    console.log(buff)
   }

}
solve('10 20 30 40 50')