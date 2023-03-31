function passwordReset(input) {
    let password = input.shift()
    let commandParser = {
        TakeOdd : (password) =>{
            let tempStr = ''
            password = password.split("")
            password.forEach((char,i) => {
                if(i % 2 != 0){
                    tempStr += char
                }
            });
            password = tempStr
            console.log(password)
            return password
        },
        Cut : (password,index,length) => {
            let endIndex = Number(index) + Number(length)
            let right = password.substring(0,Number(index))
            let left = password.substring(endIndex)
            password = right + left
            console.log(password)
            return password
        },
        Substitute :(password,substring,substitute) => {
            if(password.includes(substring)){
                let reg = new RegExp(substring,"g")
                password = password.replace(reg,substitute)
                console.log(password)
            }else {
                console.log("Nothing to replace!")
            }
            return password
        }

    }
    input.forEach((line) => {
        if(line !== "Done"){
        let [command,...tokens] = line.split(" ")
        password = commandParser[command](password, ...tokens)
        }
    });
    console.log(`Your password is: ${password}`)
}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])
