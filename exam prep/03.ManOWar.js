function solve(input) {
    let pirateShip = input.shift().split(">").map(Number)
    let warShip = input.shift().split(">").map(Number)
    let maxHealth = Number(input.shift())

    for (let line of input) {
        if (line == "Retire") {
            break;
        }
        let tokens = line.split(" ")
        let command = tokens.shift()

        switch (command) {

            case "Fire":
                let [index, fireDamage] = tokens.map(Number)

                if (warShip[index]) {
                    warShip[index] -= fireDamage
                }

                if (warShip[index] <= 0) {
                    return console.log("You won! The enemy ship has sunken.")
                }
                break;

            case "Defend":
                let [startIndex, endIndex, damage] = tokens.map(Number)
                if (pirateShip[startIndex] && pirateShip[endIndex]) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShip[i] -= damage
                        if (pirateShip[i] <= 0) {
                            return console.log("You lost! The pirate ship has sunken.")

                        }
                    }
                }
                break;

            case "Repair":
                let [repairIndex, heal] = tokens.map(Number)

                if (pirateShip[repairIndex]) {
                    pirateShip[repairIndex] += heal
                }
                if (pirateShip[repairIndex] > maxHealth) {
                    pirateShip[repairIndex] = maxHealth
                }
                break;
                
            case "Status":
                let sectionsNeedRepair = pirateShip.filter((x) => {
                    return x < maxHealth * 0.2;
                }).length;
                console.log(`${sectionsNeedRepair} sections need repair.`);
                break;
        }
    }
    let pirateShipStatus = pirateShip.reduce((a, b) => a + b, 0);
    let warShipStatus = warShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);
}
solve(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])