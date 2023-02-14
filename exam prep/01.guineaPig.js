function solve (input){
    let foodKg = Number(input[0]);
    let hayKg = Number(input[1]);
    let coverKg = Number(input[2]);
    let weightKg = Number(input[3]) 
    let hasToGoStore = false
  

        for (let day = 1 ; day <= 30 ; day++){
            foodKg -= 0.3
            if(day % 2 === 0){
                hayKg -= foodKg * 0.05
            }
            if(day % 3 === 0){
              coverKg -= weightKg / 3
            }
            if(foodKg <= 0 || hayKg <= 0 || coverKg <= 0){
                hasToGoStore = true
                break;
            }
        }
    console.log(hasToGoStore ? "Merry must go to the pet store!" : `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
}
solve(["10",

"5",

"5.2",

"1"])