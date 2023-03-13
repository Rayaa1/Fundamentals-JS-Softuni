function pascalCase (input){
    let result = []
    let startIndex = 0
    for(let i = 1 ; i < input.length ; i++){
        let word = input[i]
        if(word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90){
            result.push(input.substring(startIndex,i))
            startIndex = i

        }
    }
    result.push(input.substring(startIndex))
    console.log(result.join(", "))

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')