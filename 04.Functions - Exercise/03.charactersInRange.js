function charactersInRange(charA, charB) {
    let numOfCharA = charA.charCodeAt(0)
    let numOfCharB = charB.charCodeAt(0)
    let startNum = numOfCharA > numOfCharB ? numOfCharB : numOfCharA
    let endNum = numOfCharA > numOfCharB ? numOfCharA : numOfCharB
    buff = ""
    for (let i = startNum + 1; i < endNum; i++) {
        buff += String.fromCharCode(i) + " "

    }
    return buff
}
console.log(charactersInRange('#',':'))
