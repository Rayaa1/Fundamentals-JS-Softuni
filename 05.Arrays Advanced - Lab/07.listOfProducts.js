function listOfProducts (arr){
    let sorted = arr.sort()
    for(let i = 0 ; i < sorted.length ; i++){
        console.log(`${i + 1}.${arr[i]}`)
    }
}
listOfProducts(['Watermelon', 'Banana', 'Apples'])