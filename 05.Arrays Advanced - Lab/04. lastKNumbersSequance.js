function lastKNumbersSequance(length,k){
    let sequance = [1]
    for(let i = 1 ; i < length ; i++){
        let index = Math.max(sequance.length - k,0)
        let lastElement = sequance.slice(index)
        let sum = 0
    for(let el of lastElement){
        sum += el

    }
    sequance.push(sum)
    }
    console.log(sequance.join(" "))
}