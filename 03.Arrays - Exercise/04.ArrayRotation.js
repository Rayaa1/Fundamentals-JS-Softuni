function arrayRotation(arr, rotations) {
    let firstArr = 0
    while (rotations > 0) {
        rotations--
        firstArr = Number(arr[0])
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = firstArr
    }
    console.log(arr.join(" "))
}
arrayRotation([51, 47, 32, 61, 21], 2)