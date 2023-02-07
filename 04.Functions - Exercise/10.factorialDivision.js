function factorialDivision(numOne,numTwo){
    let firstFactorial = factorial(numOne)
    let secondFactorial = factorial(numTwo)
    let total = divide(firstFactorial,secondFactorial)

    function factorial (num){
        let result = 1
        for(let i = 1 ; i <= num ; i++){
            result *= i
        }
        return result
    }

    function divide (a,b){
        let result = a / b
        return result
    }
    console.log(total.toFixed(2))
}
factorialDivision(6,2)
