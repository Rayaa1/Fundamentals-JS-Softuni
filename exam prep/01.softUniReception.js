function solve (input){
    let toNumber = input.map(Number)
    let answerPerHour = toNumber[0] + toNumber[1] + toNumber[2]
    let student = toNumber[3]
    hours=0
    
	while (student > 0) {

		student -= answerPerHour
		hours++

		if (hours > 0 && hours % 4 === 0) {
			hours++
		}
	}

	console.log(`Time needed: ${hours}h.`);
}
solve(['1','2','3','45'])


