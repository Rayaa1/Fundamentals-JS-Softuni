function pirates(input) {
    let result = {}
    let line = input.shift()
    while (line !== "Sail") {
        let commands = line.split("||")
        let city = commands.shift()
        let [population, gold] = commands.map(Number)
        if (!result.hasOwnProperty(city)) {
            result[city] = { city, population, gold }
        } else {
            result[city].population += population
            result[city].gold += gold
        }

        line = input.shift()
    }
    
    let commandParser = {

        Plunder: (result, city, peopleToKill, goldToSteal) => {
            peopleToKill = Number(peopleToKill)
            goldToSteal = Number(goldToSteal)
            result[city].population -= peopleToKill
            result[city].gold -= goldToSteal
            console.log(`${city} plundered! ${goldToSteal} gold stolen, ${peopleToKill} citizens killed.`)
            if (result[city].gold <= 0 || result[city].population <= 0) {
                console.log(`${city} has been wiped off the map!`)
                delete result[city]
            }
            return result
        },
        Prosper: (result, city, goldToAdd) => {
            goldToAdd = Number(goldToAdd)
            if (goldToAdd < 0) {
                console.log("Gold added cannot be a negative number!")
            } else {
                result[city].gold += goldToAdd
                console.log(`${goldToAdd} gold added to the city treasury. ${city} now has ${result[city].gold} gold.`)
            }
            return result
        }
        
    }
    input.forEach((line) => {
        if (line !== "End") {
            let [command, ...tokens] = line.split("=>")
            result = commandParser[command](result, ...tokens)
        }

    });
    let count = 0
    let arr = []
    for (const key in result) {
        count++
        arr.push(`${key} -> Population: ${result[key].population} citizens, Gold: ${result[key].gold} kg`)
    }
    if (count == 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    } else {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        console.log(arr.join("\n"))
    }
}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])

