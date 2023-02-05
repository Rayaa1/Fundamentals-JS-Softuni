function passwordValidator(pass){
    let lengthValid = pass.length >= 6 && pass.length <= 10 ? true : false
    if(lengthValid === false){
        console.log("Password must be between 6 and 10 characters")
    }
    let isValidStrDig = ''
    let digitsCount = 0
    for(let i of pass){
        let char = i.charCodeAt(0)
        if((char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122)){
            isValidStrDig = true
        }else {
            isValidStrDig = false
            break;
        }
        if(char >= 48 && char <= 57){
            digitsCount += 1
        }
    }
    if(isValidStrDig === false){
        console.log("Password must consist only of letters and digits")
    }
    if(digitsCount < 2){
        console.log("Password must have at least 2 digits")
    }
    if(lengthValid && isValidStrDig && digitsCount >= 2){
        console.log("Password is valid")
    }
}
passwordValidator("Pa$s$s")