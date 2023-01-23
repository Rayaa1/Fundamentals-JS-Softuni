function solve (num){
    let numAsString = num.toString()
    let lastChar = numAsString.charAt(numAsString.length - 1)
    if(lastChar === "0"){
        console.log("zero")
    }else if(lastChar === "1"){
        console.log("one")
    }else if(lastChar === "2"){
        console.log("two")
    }else if(lastChar === "3"){
        console.log("three")
    }else if(lastChar === "4"){
        console.log("four")
    }else if (lastChar === "5"){
        console.log("five")
    }else if(lastChar === "6"){
        console.log("six")
    }else if(lastChar === "7"){
        console.log("seven")
    }else if(lastChar === "8"){
        console.log("eight")
    }else if(lastChar === "9"){
        console.log("nine")
    }
}
