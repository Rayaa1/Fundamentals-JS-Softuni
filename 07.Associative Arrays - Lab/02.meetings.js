function meeting (input){
    let result = {}
    for (const iterator of input) {
        let [day,name] = iterator.split(" ")
        if(!result.hasOwnProperty(day)){
            result[day] = name
            console.log(`Scheduled for ${day}`)
        }else {
            console.log(`Conflict on ${day}!`)           
        }        
    }
    for (const [day,name] of Object.entries(result)) {
        console.log(`${day} -> ${name}`)  
    }
}
meeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])