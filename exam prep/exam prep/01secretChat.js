function secretChat (input){
    let text = input.shift()
    for(let i = 0 ; i < input.length ; i++){
        let line = input[i].split(":|:")
        let command = line.shift()
        if(command === "Reveal"){
            console.log(`You have a new text message: ${text}`)
        }
        switch(command){
            case "InsertSpace":
                let index = Number(line.shift())
                let leftSide = text.substring(0,index)
                let rightSide = text.substring(index)
                text = leftSide + " " + rightSide
                console.log(text)
                break;
            case "Reverse":
                let substring = line.shift()
                if(text.includes(substring)){
                   text = text.replace(substring,"")
                   let arr = substring.split('').reverse().join('')
                    text += arr
                    console.log(text)
                }else {
                    console.log("error")
                    continue
                }
            break;
            case "ChangeAll":
                let [substr,replacement] = line
                while(text.includes(substr)){
                    text = text.replace(substr,replacement)
                }
                console.log(text)
            break;
        }

    }

}
secretChat([
    'heVVodar!gniV',   
    'ChangeAll:|:V:|:l',    
    'Reverse:|:!gnil',    
    'InsertSpace:|:5', 
    'Reveal'
    ])