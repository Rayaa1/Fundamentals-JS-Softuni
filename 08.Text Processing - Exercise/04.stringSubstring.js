function stringSubstring(word,text){
    let isFind = false
    let result = text.split(" ").forEach(el => {
        if(el.toLowerCase() == word){
            console.log(word)
            isFind = true   
        }
    });
    if(!isFind){
        console.log(`${word} not found!`)
    }

}
stringSubstring('javascript',

'JavaScript is the best programming language')