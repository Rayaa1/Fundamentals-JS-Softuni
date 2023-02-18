function solve(input) {
    let initialEnergy = Number(input.shift())
    let count = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End of battle") {
           break
        }

        let element = Number(input[i])

        if (initialEnergy >= element) {
            initialEnergy -= element
        } else {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`)
            return;

        }
        count++
        if (count % 3 == 0) {
            initialEnergy += count
        }
    }
    console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`)
}


solve(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])


