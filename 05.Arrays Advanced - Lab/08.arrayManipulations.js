function arrayManipulations (arr){
    let elements = arr.shift().split(" ").map(Number)
    
    for(let i = 0 ; i < arr.length ; i++){
       let [command , firstNum , secondNum] = arr[i].split(" ")
       firstNum = Number(firstNum)
       secondNum = Number(secondNum)
        switch(command){
            case "Add":
                elements.push(firstNum)
            break;
            case "Remove":
                //elements.splice(elements.indexOf(firstNum),1)
                elements = elements.filter((el) => el !== firstNum);
                break;
            case "RemoveAt":
                elements.splice(firstNum,1)
            break;
            case "Insert":
                elements.splice(secondNum , 0 , firstNum)
            break;
        }
    }
    console.log(elements.join(" "))
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)