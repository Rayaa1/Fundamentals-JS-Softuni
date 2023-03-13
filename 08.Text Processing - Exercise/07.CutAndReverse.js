function cutAndReverse (text){
    let half = text.length / 2
    let firstWord = []
    let secondWord = []
    for(let i = 0 ; i < half ; i++){
        firstWord.push(text[i])
    } 
    for(let i = half ; i < text.length ; i++){
        secondWord.push(text[i])
    }
    console.log(firstWord.reverse().join(""))
    console.log(secondWord.reverse().join(""))
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')