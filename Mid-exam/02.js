function coffeeLover (input){
    let listOfCoffee = input.shift().split(" ")
    let numOfCommand = Number(input.shift())
    for(let i = 0 ; i < numOfCommand; i++){
        let tokens = input[i].split(" ")
        let command = tokens.shift()
        switch(command){
            case "Include":
                let [coffee] = tokens
                listOfCoffee.push(coffee)
            break;
            case "Remove":
                let [action , numOfCoffee] = tokens
                numOfCoffee = Number(numOfCoffee)
                if(action === "first"){
                    if(numOfCoffee >= 0 && numOfCoffee <= listOfCoffee.length){
                        listOfCoffee.splice(0,numOfCoffee)
                    }
                }else if (action === "last"){
                    if(numOfCoffee >= 0 && numOfCoffee <= listOfCoffee.length){
                        listOfCoffee.splice(-numOfCoffee)
                    }
                }
            break;
            case "Prefer":
                let [firstIndex , secondIndex] = tokens.map(Number)
                if(firstIndex >= 0 && firstIndex <= listOfCoffee.length && secondIndex >= 0 && secondIndex <= listOfCoffee.length){
                    let firstElement = listOfCoffee[firstIndex]
                    let secondElement = listOfCoffee[secondIndex]
                    listOfCoffee.splice(firstIndex,1,secondElement)
                    listOfCoffee.splice(secondIndex,1,firstElement)
                }
            break;
            case "Reverse":
                listOfCoffee.reverse()
            break;
        }
    }
    console.log("Coffees:")
    console.log(listOfCoffee.join(" "))

}
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])



