function dungeonestDark(input) {
    let initialHealth = 100;
    let initialCoins = 0;
    let win = true
    let rooms = input[0].split("|")
    for (let i = 0; i < rooms.length; i++) {
        let commands = rooms[i].split(' ')
        let item = commands[0]
        let value = Number(commands[1])
        if (item === "potion") {
            if (initialHealth + value <= 100) {
                console.log(`You healed for ${value} hp.`)
                initialHealth += value
            } else {
                console.log(`You healed for ${100 - initialHealth} hp.`)
                initialHealth = 100
            }
            console.log(`Current health: ${initialHealth} hp.`)
        } else if (item === "chest") {
            initialCoins += value
            console.log(`You found ${value} coins.`);
        }else {
            initialHealth -= value
            if(initialHealth > 0){
                console.log(`You slayed ${item}.`)
            }else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                win = false
                break;
            }
        }
       
    }
    if(win){
        console.log("You've made it!")
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
        }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])