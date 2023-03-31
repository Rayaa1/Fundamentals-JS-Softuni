function heroes(input){
    let n = Number(input.shift())
    let hero = {}
    for(let i = 0 ; i < n ; i++){
        let [name,hp,mana] = input.shift().split(" ")
        hp = Number(hp)
        mana = Number(mana)
        hero[name] = {hp,mana}

    }
    for (const commands of input) {
        if(commands === "End"){
            break
        }
        let [command,heroName,params1,params2] = commands.split(" - ")
        if(command == "Heal"){
            let healHp = Number(params1) 
            if(hero[heroName]['hp'] + healHp > 100){
                healHp = 100 - hero[heroName]['hp']
     
            }
            hero[heroName]['hp'] += healHp
            console.log(`${heroName} healed for ${healHp} HP!`)
        }
        if(command === "Recharge"){
            let rechargeMana = Number(params1)
            if(hero[heroName]['mana'] + rechargeMana > 200){
                rechargeMana = 200 - hero[heroName]['mana'] 
            }
            hero[heroName]['mana'] += rechargeMana
            console.log(`${heroName} recharged for ${rechargeMana} MP!`)
        }
        if(command === "TakeDamage"){
            let damageHp = Number(params1)
            hero[heroName]['hp'] -= damageHp
            if(hero[heroName]['hp'] > 0){
                console.log(`${heroName} was hit for ${damageHp} HP by ${params2} and now has ${hero[heroName]['hp']} HP left!`)
            }else {
                console.log(`${heroName} has been killed by ${params2}!`)
                delete hero[heroName]
            }
        }
        if(command === "CastSpell"){
            let manaNeed = Number(params1)
           
            if(hero[heroName]['mana']>=manaNeed){
                hero[heroName]['mana'] -= manaNeed
                console.log(`${heroName} has successfully cast ${params2} and now has ${hero[heroName]['mana']} MP!`)
            }else {
                console.log(`${heroName} does not have enough MP to cast ${params2}!`)
            }
        }
        
    }
    for (const elements in hero) {
        let name = elements
        console.log(`${name}\n  HP: ${hero[name]['hp']}\n  MP: ${hero[name]['mana']}`)
   
    }

}
//heroes(['2',
 //   'Solmyr 85 120',
 //   'Kyrre 99 50',
 //   'Heal - Solmyr - 10',
 //   'Recharge - Solmyr - 50',
 //   'TakeDamage - Kyrre - 66 - Orc',
 //   'CastSpell - Kyrre - 15 - ViewEarth',
 //   'End'
 //   ])
    
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
   'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
    ])