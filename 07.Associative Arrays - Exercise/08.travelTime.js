function travelTime(input) {
    let result = {}
    for (const iterator of input) {
        let [country, town, price] = iterator.split(" > ")
        if (result.hasOwnProperty(country)) {
            let [name, cost] = result[country].join().split(" -> ")
            if (town == name) {
                let min = Math.min(price, cost)
                result[country] = [town = `${town} -> ${min}`];
            } else {
                result[country].push(town = `${town} -> ${price}`);
            }
        } else {
            result[country] = [town = `${town} -> ${price}`];
        }
    }
    for (const towns of Object.values(result)) {
        towns.sort((a, b) => { return a.split(' -> ')[1] - b.split(' -> ')[1]; });
    }
    result = Object.entries(result).sort((a, b) => { return a[0].localeCompare(b[0]); });
    for (const [country, towns] of result) {
        console.log(`${country} -> ${towns.join(' ')}`);
    }

}

travelTime([
    'Bulgaria > Sofia > 900',
    'Bulgaria > Sofia > 2000',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000'
])