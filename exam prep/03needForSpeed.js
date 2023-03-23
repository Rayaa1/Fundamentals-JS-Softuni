function needForSpeed(input) {
    let carsAmount = Number(input.shift());
 
    let cars = {};
 
    for (let i = 0; i < carsAmount; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
 
        cars[car] = { 
            mileage: Number(mileage),
             fuel: Number(fuel) };
    }
 
    for (const line of input) {
        if (line === 'Stop') {
            break;
        }
 
        let [command, carModel, token1, token2] = line.split(' : ');
 
        switch (command) {
            case 'Drive':
                let mileageToDrive = Number(token1);
                let fuelNeeded = Number(token2);
 
                if (fuelNeeded > cars[carModel]['fuel']) {
 
                    console.log('Not enough fuel to make that ride');
 
                } else {
 
                    cars[carModel]['mileage'] += mileageToDrive;
                    cars[carModel]['fuel'] -= fuelNeeded;
 
                    console.log(`${carModel} driven for ${mileageToDrive} kilometers. ${fuelNeeded} liters of fuel consumed.`)
 
                    if (cars[carModel]['mileage'] >= 100000) {
 
                        console.log(`Time to sell the ${carModel}!`);
 
                        delete cars[carModel];
                    }
                }
 
                break;
 
            case 'Refuel':
                let fuelToFill = Number(token1);
 
                if (cars[carModel]['fuel'] + fuelToFill > 75) {
                    fuelToFill = 75 - cars[carModel]['fuel'];
                }
 
                cars[carModel]['fuel'] += fuelToFill;
 
                console.log(`${carModel} refueled with ${fuelToFill} liters`);
 
                break;
 
            case 'Revert':
                let mileageToDecrease = Number(token1);
 
                cars[carModel]['mileage'] -= mileageToDecrease;
 
                if (cars[carModel]['mileage'] < 10000) {
                    cars[carModel]['mileage'] = 10000;
 
                } else {
                    console.log(`${carModel} mileage decreased by ${mileageToDecrease} kilometers`);
                }
 
                break;
        }
    }
 
    for (const car in cars) {
        console.log(`${car} -> Mileage: ${cars[car]['mileage']} kms, Fuel in the tank: ${cars[car]['fuel']} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])