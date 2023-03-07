function storage (input){
    let result = new Map()
    for (const iterator of input) {
        let line = iterator.split(" ")
        let product = line.shift()
        let amount = Number(line.shift())
        if(result.has(product)){
            amount += result.get(product)
        }
        result.set(product,amount)
    }
    let entries = result.entries()
    for (const [product,amount] of entries) {
        console.log(`${product} -> ${amount}`)  
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])