function AddSubstract (numOne , numTwo , numThree){
    let addSum = (numOne,numTwo) => numOne + numTwo
    let substractSum = (addSum,numThree) => addSum - numThree
    let sum = addSum(numOne,numTwo)
    let substract = substractSum(sum,numThree)
    return substract
}
console.log(AddSubstract(1,17,30))