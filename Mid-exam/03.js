function chatLogger(input){
    let newArr = []
    for(let i = 0 ; i < input.length ; i++){
        let tokens = input[i].split(" ")
        let command = tokens.shift()
        if(command === "end"){
            break;
        }
        switch(command){
            case "Chat":
                let [chatMessage] = tokens
                newArr.push(chatMessage)
            break;
            case "Delete":
                let [deleteMessage] = tokens
                if(newArr.includes(deleteMessage)){
                    newArr.splice(newArr.indexOf(deleteMessage),1)
                }
            break;
            case "Edit":
                let [editMessage,editedVersion] = tokens
                if(newArr.includes(editMessage)){
                    newArr.splice(newArr.indexOf(editMessage),1,editedVersion)
                }
            break;
            case "Pin":
                let [pinMessage] = tokens
                if(newArr.includes(pinMessage)){
                    newArr.splice(newArr.indexOf(pinMessage),1)
                    newArr.push(pinMessage)
                }
            break;
            case "Spam":
                for(let el of tokens){
                    let spamMessage = el
                    newArr.push(spamMessage)
                }
            break;

        }

    }
    console.log(newArr.join("\n"))

}
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

