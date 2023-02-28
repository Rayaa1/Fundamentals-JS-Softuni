function store (store , order){
    let myStore = {}
    for(let i = 0 ; i < store.length ; i+=2){
        let name = store[i]
        let quantity = store[i + 1]
        myStore[name] = Number(quantity)

    }
    for(let i = 0 ; i < order.length ; i+= 2){
        let name = order[i]
        let quantity = Number(order[i + 1])
        if(myStore.hasOwnProperty(name)){
            myStore[name] += quantity
        }else{
            myStore[name] = quantity

        }
    }
    for(let product of Object.keys(myStore)){
        console.log(`${product} -> ${myStore[product]}`)
    }
}
store(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2' ],  
    ['Flour', '44', 'Oil', '12', 'Pasta', '7','Tomatoes', '70', 'Bananas', '30' ])