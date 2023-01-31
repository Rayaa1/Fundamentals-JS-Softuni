function reverseStr (word){
    let splitS = word.split("")
    let reversed = splitS.reverse(word)
    console.log(reversed.join(""))
}
reverseStr("hello")