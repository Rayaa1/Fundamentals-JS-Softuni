function reverseInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let element = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = arr[i]
    }
    console.log(arr.join(' '))
}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])
