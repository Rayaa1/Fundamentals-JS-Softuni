function matchPhoneNumber (input){
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/gm
    let validNumbers = input.shift()
    validNumbers = validNumbers.match(pattern)
    console.log(validNumbers.join(", "))

}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222,+359-2-222-222, +359-2-222-22222 ,+359-2-222-2222'])