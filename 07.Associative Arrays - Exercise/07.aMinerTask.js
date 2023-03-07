function minerTask (input){
    let resource = {}
    for(let i = 0 ; i < input.length ; i++){
        let name = input[i]
        let quantity = Number(input[i+1])
        if(i % 2 == 0){
            if(resource.hasOwnProperty(name)){
                resource[name] += quantity
            }else {
                resource[name] = quantity
            }
        }
    }
    for (const [name,quantity] of Object.entries(resource)) {
        console.log(`${name} -> ${quantity}`)       
    }
}
minerTask([
    'Gold',    
    '155',    
    'Silver',    
    '10',    
    'Copper', 
    '17'  ])