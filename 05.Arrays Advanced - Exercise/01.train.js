function train (input){
    let wagons = input.shift().split(" ").map(wagons => Number(wagons))
    let maxCapacity = input.shift()
    for(let el of input){
        let word = el.split(" ")
        if(word[0] === "Add"){
            wagons.push(Number(word[1]))
        }else {
            let passengers = Number(word[0])
            for(let i = 0 ; i < wagons.length ; i++){
                if(wagons[i] + passengers <= maxCapacity){
                    wagons[i] += passengers
                    break;
                }
            }
        }
    }
console.log(wagons.join(" "))
}
train(['32 54 21 12 4 0 23',
'75','Add 10','Add 0','30','10','75'])