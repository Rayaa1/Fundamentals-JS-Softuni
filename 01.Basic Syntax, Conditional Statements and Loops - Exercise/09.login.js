function solve (input){
    let username = input[0]
    let password = ""
    for(let i = username.length - 1 ; i >= 0 ; i-- ){
        password += username[i]
    }
    let incorrectPasswordCount = 0
    for(let j = 1 ; j < input.length ; j++){
        let tempPassword = input[j]
        if(tempPassword === password){
            console.log(`User ${username} logged in. `)
        }else {
            incorrectPasswordCount++
            if(incorrectPasswordCount === 4){
                console.log(`User ${username} blocked!`)
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }
}

