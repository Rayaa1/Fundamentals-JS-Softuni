function plant(input) {
    let n = Number(input.shift())
    let plants = {}
    for (let i = 0; i < n; i++) {
        let line = input.shift().split("<->")
        let name = line.shift()
        let rarity = Number(line.shift())
        if (!plants.hasOwnProperty(name)) {
            plants[name] = { name, rarity, rating: 0, count: 0 }
        } else {
            plants[name].rarity += rarity
        }
    }
    for (const commands of input) {
        if (commands === "Exhibition") {
            break
        }
        let command = commands.split(": ")
        if (command[0] === "Rate") {
            let [plantToRate, rating] = command[1].split(" - ")
            if (plants.hasOwnProperty(plantToRate)) {
                plants[plantToRate].rating += Number(rating)
                plants[plantToRate].count++
            } else {
                console.log("error")
            }
        } else if (command[0] === "Update") {
            let [plantToUpdate, newRarity] = command[1].split(" - ")
            if (plants.hasOwnProperty(plantToUpdate)) {
                plants[plantToUpdate].rarity = Number(newRarity)
            } else {
                console.log("error")
            }
        } else if (command[0] === "Reset") {
            let plantToReset = command[1]
            if (plants.hasOwnProperty(plantToReset)) {
                plants[plantToReset].rating = 0
                plants[plantToReset].count = 0
            } else {
                console.log("error")
            }
        }


    }
    console.log("Plants for the exhibition:")
    for (const key in plants) {
        let avg = plants[key].rating / plants[key].count
        if(plants[key].rating == 0 && plants[key].count == 0){
            avg = 0
        }

        console.log(`- ${key}; Rarity: ${plants[key].rarity}; Rating: ${avg.toFixed(2)}`)

    }

}
plant(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])

