function solve (input){
    let result = {}
    input = input.toLowerCase().split(" ")
    for(let word of input){
        if(!result.hasOwnProperty(word)){
        result[word] = 0
        }
        result[word]++
    }
    let arr = Object.entries(result)
    let buff = " "
    for(let [key,value] of arr){
        if(value % 2 != 0){
            buff += `${key} `
            
        }
    }
    console.log(buff)
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')