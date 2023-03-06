function partyTime(arr) {
    let vipList = [];
    let regularList = [];
    let reservation = arr.shift();
    while (reservation !== 'PARTY') {
        if (isNaN(Number(reservation.charAt(0)))) {
            regularList.push(reservation);
        } else {
            vipList.push(reservation);
        }
        reservation = arr.shift();
    }
    for (const iterator of arr) {
        if (vipList.indexOf(iterator) >= 0) {
            vipList.splice(vipList.indexOf(iterator), 1);
        }
        if (regularList.indexOf(iterator) >= 0) {
            regularList.splice(regularList.indexOf(iterator), 1);
        }
    }
    console.log(vipList.length + regularList.length);
    console.log(vipList.join('\n'));
    console.log(regularList.join('\n'));
}
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);