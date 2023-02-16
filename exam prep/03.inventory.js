function inventory(input) {
    let items = input.shift().split(", ")
    let currItem ;

    for(const line of input) {
        if (line === "Craft!") {
            console.log(items.join(", "));
            break;
        }
         let tokens = line.split(" - ")
         let command = tokens.shift()
        if(command === "Collect"){
            currItem = tokens[0]
            if(!items.includes(currItem)){
                items.push(currItem)
            }
            
        }
        if(command === "Drop"){
            currItem = tokens[0]
            if(items.includes(currItem)){
                items.splice(items.indexOf(currItem),1)
            }
        }

        if (command === "Combine Items") {
            let [oldItem, newItem] = tokens[0].split(":")
            if (items.includes(oldItem)) {
                items.splice(items.indexOf(oldItem) + 1, 0, newItem);
            }    
        }
        if(command === "Renew"){
            currItem = tokens[0]
            if(items.includes(currItem)){
                items.splice(items.indexOf(currItem),1)
                items.push(currItem)
            }   
        }
    }
}


inventory([ 'Iron, Sword', 'Drop - Bronze',  'Combine Items - Sword:Bow',  'Renew - Iron', 'Craft!'
])

