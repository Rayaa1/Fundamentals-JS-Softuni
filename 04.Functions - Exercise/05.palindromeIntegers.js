function palindromeIntegers (arr){
   for(let num of arr){
    let reversedNum = num
       .toString()
       .split("")
       .reverse()
       .join("")
    console.log(num.toString() === reversedNum ? true : false)
   }
}
palindromeIntegers([123,323,421,121])