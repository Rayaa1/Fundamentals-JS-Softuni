function worldTour(input) {
    let travelStops = input.shift()
    for (const line of input) {
        let [command, params1, params2] = line.split(":")
        if (command == "Travel") {
            break;
        }
        if (command === "Add Stop") {
            let index = Number(params1)
            if(travelStops[index]){
            let left = travelStops.substring(0, Number(params1))
            let right = travelStops.substring(Number(params1))
            travelStops = left + params2 + right
            }
            console.log(travelStops)
        }
        if (command === "Remove Stop") {
            let startIndex = Number(params1)
            let endIndex = Number(params2)
            if (travelStops[startIndex] && travelStops[endIndex]) {
                if(startIndex<endIndex){
                let firstPart = travelStops.substring(0,startIndex)
                let secPart = travelStops.substring(endIndex+1)
                travelStops = firstPart+secPart
             }else{
                 let firstPart = travelStops.substring(0,endIndex)
                let secPart = travelStops.substring(startIndex+1)
                travelStops = firstPart+secPart
             }        
            }
        }
        if (command === "Switch") {
            const pattern = new RegExp(params1, 'g');
            travelStops = travelStops.replace(pattern, params2)
            console.log(travelStops)
        }
       // if(command === "Switch"){
        //    if(travelStops.includes(params1)){
       //     travelStops = travelStops.replace(params1,params2)
       //     }    
       //     console.log(travelStops)
      //  }

    }
    console.log(`Ready for world tour! Planned stops: ${travelStops}`)

}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
