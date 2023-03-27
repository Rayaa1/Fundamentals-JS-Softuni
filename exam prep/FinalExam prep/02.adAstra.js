function adAstra (input){
    let pattern = /([#|])(?<product>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let match ;
    let result = []
    let totalCal = 0
    while((match = pattern.exec(input)) !== null){
        totalCal += Number(match.groups.calories)
        result.push(`Item: ${match.groups.product}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`)
    }
    let expired = Math.trunc(totalCal / 2000)
    console.log(`You have food to last you for: ${expired} days!`)
    console.log(result.join("\n"))
}
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ])
    