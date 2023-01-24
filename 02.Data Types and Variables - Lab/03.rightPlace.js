function solve (str,char,result){
    let word = str.replace("_",char)
    console.log(word === result ? "Matched" : "Not Matched")
}

