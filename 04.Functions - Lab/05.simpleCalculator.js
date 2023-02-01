function calculator(numOne, numTwo, operator) {
    let result = a => {
        switch (operator) {
            case "multiply":
                return numOne * numTwo; 
            case "divide":
                return numOne / numTwo;
            case "add":
                return numOne + numTwo; 
            case "subtract":
                return numOne - numTwo; 
        }
    }
    console.log(result())
}
calculator(50,13,'subtract')