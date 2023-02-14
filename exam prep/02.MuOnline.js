function solve(arr) {
    let rooms = arr.split('|')
    let health = 100
    let bitcoin = 0
    let roomCount = 0
    let isDead = false
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i]
        let command = room.split(" ")
        let commands = command[0]
        let number = Number(command[1])
        switch (commands) {
            case "potion":
                roomCount++
                health += number
                if (health >= 100) {
                    number = 100 - (health - number)
                    health = 100
                }
                console.log(`You healed for ${number} hp.`)
                console.log(`Current health: ${health} hp.`)
                break;
            case "chest":
                roomCount++
                bitcoin += number
                console.log(`You found ${number} bitcoins.`)
                break;
            default:
                roomCount++
                health -= number
                if (health > 0) {
                    console.log(`You slayed ${commands}.`)
                } else {
                    console.log(`You died! Killed by ${commands}.`)
                    console.log(`Best room: ${roomCount}`)
                    isDead = true
                    return;
                }
                break;

        }
    }
    if(isDead == false){
        console.log("You've made it!")
        console.log(`Bitcoins: ${bitcoin}`)
        console.log(`Health: ${health}`)
    }
}
solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")