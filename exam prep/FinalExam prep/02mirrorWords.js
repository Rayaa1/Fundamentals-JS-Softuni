function mirrorWords(arr){
    let pattern = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g
    let count = 0
    let result = []
    for (const text of arr) {
        let matches = text.matchAll(pattern)
        for (const match of matches) {
            count++
            let leftWord = match.groups["word1"]
            let rightWord = match.groups["word2"]
            let reversedRight = reversed(rightWord)
            if(leftWord === reversedRight){
                result.push(`${leftWord} <=> ${rightWord}`)
            }
        }
    }
    if(count == 0){
        console.log("No word pairs found!")
    }else {
        console.log(`${count} word pairs found!`)
    }
    if(result.length == 0){
       console.log("No mirror words!")
    }else {
        console.log(`The mirror words are:\n${result.join(", ")}`)
    }
    function reversed(text){
        let reversed = ''
        for(let i = text.length - 1 ; i >= 0 ;i--){
            reversed += text[i]
        }
        return reversed
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])