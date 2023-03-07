function solve(arr) {
    let deck = {};
    for (let person of arr) {
        let data = person.split(": ");
        let name = data[0];
        let cards = data[1].split(", ");
 
        for (let card of cards) {
 
            if (!deck.hasOwnProperty(name)) {
                deck[name] = [];
            }
            if (deck.hasOwnProperty(name)) {
                if (!deck[name].includes(card)) {
                    deck[name].push(card);
                }
            }
        }
    }
    let entries = Object.entries(deck);
    for (let personDeck of entries) {
        let name = personDeck[0];
        let deck = personDeck[1];
        let sum = 0;
        let power = "";
        let type = "";
        for (let card of deck) {
            if (card.length === 3) {
                power = card.substring(0, 2);
                type = card[2];
            } else {
                power = card[0];
                type = card[1];
            }
            sum += parsedPower(power) * parsedType(type);
        }
        console.log(`${name}: ${sum}`)
    }
    function parsedType(type) {
        switch (type) {
            case "S": type = 4; break;
            case "H": type = 3; break;
            case "D": type = 2; break;
            case "C": type = 1; break;
        }
        return type;
    }
    function parsedPower(power) {
        if (isNaN(power)) {
            switch (power) {
                case "J": power = 11; break;
                case "Q": power = 12; break;
                case "K": power = 13; break;
                case "A": power = 14; break;
            }
        } else {
            power = Number(power);
        }
        return power;
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])