function revealWords (word,sentence){
    let words = word.split(", ")
    let text = sentence.split(" ")
    for (const word of words) {
        for(let i = 0 ; i < text.length ; i++){
            if(text[i].includes("*") && text[i].length === word.length){
                text[i] = word
            }
        }
    }
    console.log(text.join(" "))
}
revealWords('great',
'softuni is ***** place for learning new programming languages')