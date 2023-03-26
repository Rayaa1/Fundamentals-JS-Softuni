function solve (input){
    let word = input.shift()
    for(let i = 0 ; i < input.length ; i++){
        let commands = input[i]
        if(commands == "Decode"){
            break
        }
        let line = commands.split("|")
        let command = line.shift()
        
        switch(command){
            case "Move":
                let letterNum = Number(line[0])
                let leftSide = word.substring(0,letterNum)
                let rightSide = word.slice(letterNum)
                word = rightSide + leftSide
            break;
            case "Insert":
                let index = Number(line.shift())
                let value = line.shift()
                let leftSideInsert = word.substring(index)
                let rightSideInsert = word.substring(0,index) 
                word = rightSideInsert + value + leftSideInsert
            break;
            case "ChangeAll":
                let [removeLetter,newLetter] = line
                while(word.includes(removeLetter)){
                word = word.replace(removeLetter,newLetter)
                }
            break;
        }
       
    }
    console.log(`The decrypted message is: ${word}`)

}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  
  )