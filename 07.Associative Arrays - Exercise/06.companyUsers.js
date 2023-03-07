function companyUser (input){
let result = {}
input.forEach(element => {
    let [company,id] = element.split(" -> ")
    if(!result.hasOwnProperty(company)){
        result[company] = []
    }
    result[company].push(id)
});
let sortCompany = Object.entries(result).sort((a,b) => a[0].localeCompare(b[0]))
sortCompany.forEach(element => {
    const companyName = element[0]
    console.log(companyName)
    const allIds = element[1]
    let uniqueIds = new Set(allIds)
    for (const id of uniqueIds) {
        console.log(`-- ${id}`)
        
    }
});
}

companyUser([ 'SoftUni -> AA12345', 
'SoftUni -> BB12345',
 'Microsoft -> CC12345', 
'HP -> BB12345'])