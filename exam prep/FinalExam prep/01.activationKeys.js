function activationKeys(input){
    let myKey = input.shift()
    for(let i = 0 ; i < input.length;i++){
        let [command,...tokens] = input[i].split(">>>")
        if(command === "Generate"){
            break
        }
        switch(command){
            case "Slice":
                let [startIndex,endIndex] = tokens
                let right = myKey.substring(0,startIndex)
                let left = myKey.substring(endIndex,myKey.length+1)
                myKey = right.concat(left)
                console.log(myKey)
                break;
            case "Flip":
                let [characterCase,start,end] = tokens
                let firstPart = myKey.substring(0, start);
			    let stringToFlip = myKey.substring(start, end);
			    let secondPart = myKey.substring(end,myKey.length+1);
                if(characterCase === "Upper"){
                    stringToFlip = stringToFlip.toUpperCase()
                }else {
                    stringToFlip = stringToFlip.toLowerCase()
                }
                myKey = firstPart + stringToFlip + secondPart
                console.log(myKey)
             break;
            case "Contains":
                let [substring] = tokens
                if(myKey.includes(substring)){
                    console.log(`${myKey} contains ${substring}`)
                }else {
                    console.log("Substring not found!")
                }
                break


        }
    }
    console.log(`Your activation key is: ${myKey}`)


}


activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
