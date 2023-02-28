function inventory(arr){
    let result = []
    for(let line of arr){
        let [name,level,items] = line.split(" / ")
        let heores = {
            name : name,
            level : level,
            items : items.split(", ")
        }
        result.push(heores)
    }
    result.sort((heoresA,heoresB) => heoresA.level - heoresB.level )
    for(let heores of result){
        console.log(`Hero: ${heores.name}\nlevel => ${heores.level}\nitems => ${heores.items.join(", ")}`)
    }
}
inventory(['Isacc / 25 / Apple, GravityGun', 
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara' ])