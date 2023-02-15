function computerStore(input){
    let sumWithoutTaxes = 0
    let sumWithTaxes = 0
    for(let i = 0 ; i < input.length ; i++){
        if(input[i] === "special"){
            sumWithTaxes = sumWithoutTaxes * 0.20 
            totalPrice = (sumWithTaxes + sumWithoutTaxes) * 0.9
            break;
        }else if(input[i] === "regular"){
            sumWithTaxes = sumWithoutTaxes * 0.20  
            totalPrice = sumWithTaxes + sumWithoutTaxes
            break
        }
        let toNum = Number(input[i])
        if(toNum >= 0){
            sumWithoutTaxes += toNum
        }else {
            console.log("Invalid price!")
        }
        
    }
    if(totalPrice === 0){
        console.log("Invalid order!")
        return;
    }else {
        console.log("Congratulations you've just bought a new computer!")
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$\nTaxes: ${sumWithTaxes.toFixed(2)}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`)
    }
    
    
}
computerStore([ '1023',  '15', '-20', '-5.50', '450', '20', '17.66',  '19.30', 'regular' ])