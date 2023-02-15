function solve(arr) {
    let loot = arr.shift().split("|")

    for (let el of arr) {
        let command = el.split(" ")
        let action = command.shift()
        if (action === "Yohoho!") {
            break;
        }
        switch (action) {
            case "Loot":
                if (command.forEach((element) => {
                    if (!loot.includes(element)) {
                        loot.unshift(element)
                    }
                }));
                break;
            case "Drop":
                let index = Number(command[0])
                if (index < loot.length && index >= 0) {
                    let tempIndex = loot[index]
                    loot.splice(index, 1)
                    loot.push(tempIndex)
                }
                break;
            case "Steal":
                let count = Number(command[0])
                if (count > loot.length) {
                    count = loot.length;
                }
                loot = loot.reverse();
				let stolenItems = loot.slice(0, count);
				loot.splice(0, count);
				loot = loot.reverse();
				console.log(stolenItems.reverse().join(", "));
                break;
        }

    }

    if (loot.length === 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0
        loot.forEach(item => {
            sum += item.length
        });
        let avg = sum / loot.length
        console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
    }


}
solve(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])