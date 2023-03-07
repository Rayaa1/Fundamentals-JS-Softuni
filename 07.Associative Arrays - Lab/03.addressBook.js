function addressBook(input){
    let result = {}
    for (const iterator of input) {
        let [name,address] = iterator.split(":")
        result[name] = address
    }
    let sorted = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0])).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`)
        
    });
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])