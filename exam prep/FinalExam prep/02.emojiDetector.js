function emojiDetector (arr){
    let regexEmoji = /(?<emojiWithSur>([:*]){2}(?<emoji>[A-Z][a-z]{2,})\2{2})/g
    let regexDif = /\d/g
    let countEmojies = 0
    let coolThreshold = 1
    let coolEmojies = []
    let text = arr.shift()
 
    let emojiMatches = text.matchAll(regexEmoji)
    let digMatch = text.match(regexDif)
 
    for(const match of digMatch){
        coolThreshold*=Number(match)
    }
 
    for(const match of emojiMatches){
        countEmojies++
        let coolOrNor = 0
        for(let i = 0; i< match.groups.emoji.length;i++){
           let chNum =  (match.groups.emoji[i]).charCodeAt(0)
           coolOrNor+=Number(chNum)
        }
 
        if(Number(coolOrNor)>Number(coolThreshold)){
            coolEmojies.push(match.groups.emojiWithSur)
        }
    }
 
    console.log(`Cool threshold: ${coolThreshold}`)
    console.log(`${countEmojies} emojis found in the text. The cool ones are:`)
    for(let i = 0; i<coolEmojies.length;i++){
        console.log(coolEmojies[i])
    }
 
 
 
 
 
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])