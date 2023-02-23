function city (obj){
    for(let key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`)
    }
}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })