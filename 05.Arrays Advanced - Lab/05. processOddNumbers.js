function solve (arr){
    let oddNum = arr.filter((x,i) => (i + 1) % 2 === 0).map(x => x * 2).reverse()
    console.log(oddNum.join(" "))

}
solve([3,
    0,
    10,
    4,
    7,
    3])