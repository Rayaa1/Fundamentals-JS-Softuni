function destinationsMapper (input){
    let pattern = /([=/])(?<destination>[A-Z][A-Za-z]{2,})(\1)/g
    let destination = []
    let match;
    while((match=pattern.exec(input)) !== null){
        destination.push(match[2])
    }
    console.log(`Destinations: ${destination.join(", ")}\nTravel Points: ${destination.join('').length}`)
    

}
destinationsMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")

