function repeatStr(str, count) {
    let repeat = ""
    for (let i = 0; i <= count - 1; i++) {
        repeat += str
    }
    console.log(repeat)
}
repeatStr("abc", 3)