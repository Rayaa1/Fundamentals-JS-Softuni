function distinctArray (arr){
    let newArr = []
    for(let el of arr){
        !newArr.includes(el) ? newArr.push(el) : null  
    }
    console.log(newArr.join(" "))
}
distinctArray([7, 8, 9, 7, 2, 3,4, 1, 2])