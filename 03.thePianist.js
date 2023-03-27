function pianist(input){
    let numberPieces = input.shift()
    let result = {}
    for(let i = 0 ; i < numberPieces ; i++){
        let[piece,composer,tone] = input.shift().split("|")
        if (!result.hasOwnProperty(piece)) {
			result[piece] = {};
		}
		result[piece][composer] = tone;
    }
    let commandParser = {
        Add: (result,pieceToAdd,composerToAdd,toneToAdd) =>{
            if(!result.hasOwnProperty(pieceToAdd)){
                result[pieceToAdd] = {}
                result[pieceToAdd][composerToAdd] = toneToAdd
                console.log(`${pieceToAdd} by ${composerToAdd} in ${toneToAdd} added to the collection!`);
            }else {
                console.log(`${pieceToAdd} is already in the collection!`);
            }
            return result
        },
        Remove: (result,pieceToRemove) => {
            if(result.hasOwnProperty(pieceToRemove)){
                console.log(`Successfully removed ${pieceToRemove}!`);
                delete result[pieceToRemove]
            }else {
				console.log(
					`Invalid operation! ${pieceToRemove} does not exist in the collection.`
				);
			}
			return result;
        },
        ChangeKey: (result,pieceToChange,newTone) => {
            if(result.hasOwnProperty(pieceToChange)){
                for (const [key, value] of Object.entries(result[pieceToChange])) {
					result[pieceToChange][key] = newTone;
				}
                console.log(`Changed the key of ${pieceToChange} to ${newTone}!`);
            }else {
                console.log(`Invalid operation! ${pieceToChange} does not exist in the collection.`);
            }
            return result
        }
    }
    input.forEach(line => {
        let [command,...tokens] = line.split("|")
        if(command !== "Stop"){
            result = commandParser[command](result, ...tokens)
        }
    });
    for (const [piece, composerTone] of Object.entries(result)) {
		for (const [composer, tone] of Object.entries(composerTone)) {
			console.log(`${piece} -> Composer: ${composer}, Key: ${tone}`);
		}
	}

}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
   'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )