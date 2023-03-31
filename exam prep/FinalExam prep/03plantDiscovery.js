function plantDiscovery(input){
    let n = Number(input.shift())
    let plants = {}
    for(let i = 0 ; i < n ; i++){
        let [name,rarity] = input[i].split("<->")
        rarity = Number(rarity)
        plants[name] = {rarity,rating: []}
    }
    const rate = (plant,rate) => plants[plant].rating.push(Number(rate))
    const update = (plant,newRarity) => plants[plant].rarity = Number(newRarity)
    const reset = (plant) => plants[plant].rating = []
    const commands = {
        Rate : rate,
        Update : update,
        Reset : reset
    };
    while(input[n] !== "Exhibition"){
        let [action,tokens] = input[n].split(": ")
        let [plant,num] = tokens.split(" - ")
        if (!plants[plant]) {
            console.log('error');
            n++;
            continue;
          }
          const result =commands[action]
          result(plant,num)
          n++
    }
    console.log('Plants for the exhibition:');
   Object.entries(plants).forEach(([plant,obj]) => {
     let sumRating = obj.rating.reduce((acc,r) => acc+r,0)
     const totalRating = sumRating / obj.rating.length || 0;
     console.log(`- ${plant}; Rarity: ${obj.rarity}; Rating: ${totalRating.toFixed(2)}`);
       
   });
    

}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
