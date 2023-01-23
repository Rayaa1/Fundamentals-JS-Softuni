function solve (a,b,c){
    if(a > b && a > c){
        if(b > c){
        console.log(`${a}\n${b}\n${c}`)
        }else {
            console.log(`${a}\n${c}\n${b}`)
        }
    }else if(b > a && b > c){
        if(a > c){
            console.log(`${b}\n${a}\n${c}`)
        }else {
            console.log(`${b}\n${c}\n${a}`)
        }
    }else if(c > a && c > b){
        if(a > b){
            console.log(`${c}\n${a}\n${b}`)
        }else {
            console.log(`${c}\n${b}\n${a}`)
        }
    }
}