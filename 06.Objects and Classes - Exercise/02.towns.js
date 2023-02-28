function towns (arr){
    for(let line of arr){
        let [town,latitude,longitude] = line.split(" | ")
        latitude = Number(latitude).toFixed(2)
        longitude = Number(longitude).toFixed(2)
        let obj = {
            town: town,
            latitude: latitude,
            longitude: longitude
        }
        console.log(obj)
    }
    
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])