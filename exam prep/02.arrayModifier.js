function arrayModifier(input){
    let initialArr = input.shift().split(" ").map(Number)
    for(let i = 0 ; i < input.length ; i++){
        let tokens = input[i].split(" ")
        let command = tokens.shift()
        let [firstIndex,secondIndex] = tokens.map(Number)
        if(command === 'end'){
            break;
        }
        switch(command){
            case "swap":
                [initialArr[firstIndex], initialArr[secondIndex]] = [initialArr[secondIndex], initialArr[firstIndex]];
             break;
            case "multiply":
                let multiply = initialArr[firstIndex] * initialArr[secondIndex]
                initialArr.splice(firstIndex,1,multiply)
            break;
            case "decrease":
                initialArr =initialArr.map((a) => a - 1)
            break;
        }
    }
    console.log(initialArr.join(", "))
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )