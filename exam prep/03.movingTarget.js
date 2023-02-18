function movingTarget(input){
    let elements = input.shift().split(" ").map(Number)
    
    for(let i = 0 ; i < input.length ; i++){
        let tokens = input[i].split(" ")
        let command = tokens.shift()
        let [index,value] = tokens.map(Number)
        if(command === "End"){
            console.log(elements.join("|"))
            return;
        }
        switch(command){
            case "Shoot":
                if(index >= 0 && index < elements.length){
                    elements[index] -= value
                    if(elements[index] <= 0){
                        elements.splice(index,1)
                    }
                }
            break;
            case "Add":
                if(index >= 0 && index < elements.length){
                    elements.splice(index,0,value)
                }else {
                    console.log("Invalid placement!")
                }
            break;
            case "Strike":
                let indexesBefore = index - value
				let indexesAfter = index + value
                if (indexesBefore >= 0 && indexesAfter < elements.length) {
                    let indexesToRemove = indexesAfter - indexesBefore + 1
                    elements.splice(indexesBefore, indexesToRemove)
                } else {
                    console.log('Strike missed!');
                }
                break
        }
    }
}
movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])
