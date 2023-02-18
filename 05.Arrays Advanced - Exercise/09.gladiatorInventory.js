function gladiatorInventory (input){
    let inventory = input.shift().split(" ")
    for(let i = 0 ; i < input.length ; i++){
        let tokens = input[i].split(" ")
        let command = tokens.shift()
        
        switch(command){
            case "Buy":
                if(!inventory.includes(tokens[0])){
                    inventory.push(tokens[0])
                }
            break;
            case "Trash":
                if(inventory.includes(tokens[0])){
                    inventory.splice(inventory.indexOf(tokens[0]),1)
                }
            break;
            case "Repair":
                if(inventory.includes(tokens[0])){
                    let currItem = tokens[0]
                    inventory.splice(inventory.indexOf(currItem),1)
                    inventory.push(currItem)
                }
            break;
            case "Upgrade":
                let upgradeEquipment = tokens[0].split("-")
                equipment = upgradeEquipment[0];
               
                if(inventory.includes(equipment)){
                    let indexToInsert = inventory.indexOf(equipment) + 1
                    let upgradeInsert = upgradeEquipment.join(":")
                    inventory.splice(indexToInsert,0,upgradeInsert)
                }
            break;
        }
    }
    console.log(inventory.join(" "))
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])