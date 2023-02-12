function houseParty (arr){
    let myList = []
    for(let el of arr){
    let command = el.split(" is ")
    let name = command[0]
    let action = command[1]
    if(action === "going!"){
        if(myList.indexOf(name) === -1){
            myList.push(name)
        }else {
            console.log(`${name} is already in the list!`)
        }
    }else {
        if(myList.indexOf(name) === -1){
            console.log(`${name} is not in the list!`)
        }else {
            myList.splice(myList.indexOf(name),1)
        }
    }
    }
    console.log(myList.join("\n"))
}
houseParty(['Allie is going!','George is going!','John is not going!','George is not going!'])