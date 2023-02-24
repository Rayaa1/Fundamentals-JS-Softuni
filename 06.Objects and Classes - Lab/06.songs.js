function songs(arr) {

    class Song {
      constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
      }
    }
  
    const numberOfSongs = arr.shift();
    const commandType = arr.pop();
  
    const listOfSongs = [];
  
    for (const song of arr) {
      const [type, name, time] = song.split('_');
      listOfSongs.push(new Song(type, name, time));
    }
  
    if (commandType == 'all') {
      listOfSongs.forEach(s => console.log(s.name));
    } else {
      listOfSongs.filter(i => i.type == commandType).forEach(s => console.log(s.name));
    }
  }
solve([3,

    'favourite_DownTown_3:14',

    'favourite_Kiss_4:16',

    'favourite_Smooth Criminal_4:01',

    'favourite'])