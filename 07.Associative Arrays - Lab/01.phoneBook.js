function phoneBook (arr){
    let dict = {}
    for(let el of arr){
        let [name,number] = el.split(" ")
        dict[name] = number
    }
   for(let key in dict){
    console.log(`${key} -> ${dict[key]}`)
   }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])