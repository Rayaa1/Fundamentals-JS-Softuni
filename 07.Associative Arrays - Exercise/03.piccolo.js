function parkingTrack(input) {
    let newArr = []
    for (let line of input) {
        let [command, number] = line.split(", ")
        if (command === "IN") {
            if (!newArr.includes(number)) {
                newArr.push(number)
            }
        } else if (command === "OUT") {
            if (newArr.includes(number)) {
                newArr.splice(newArr.indexOf(number), 1)
            }
        }
    }
    newArr.sort((a, b) => a.localeCompare(b))
    newArr.length > 0 ? console.log(newArr.join('\n')) : console.log("Parking Lot is Empty")
}
parkingTrack(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])