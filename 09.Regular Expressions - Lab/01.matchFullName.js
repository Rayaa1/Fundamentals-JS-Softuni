function matchFullName (input){
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g
    let validNames = input.match(pattern)
    console.log(validNames.join(" "))

}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")