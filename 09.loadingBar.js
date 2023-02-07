function loadingBar (num){
    if(num === 100){
        console.log('100% Complete! \n[%%%%%%%%%%]')
    }else {
        let result = '';
        for(let i = 0 ; i < 10 ; i++){
            if(num/10 > i){
                result += "%"
            }else{
                result += "."
            }
        }
        console.log(`${num}% [${result}]\nStill loading...`)
    }
}
loadingBar(20)