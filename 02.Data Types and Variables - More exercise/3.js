function cone (radius,height){
    let volume = 1/3 * Math.PI * Math.pow(radius,2) * height
    console.log(`volume = ${volume.toFixed(4)}`)
    let s = Math.sqrt(radius*radius + height * height)
    let area = (Math.PI*radius) *(s + radius)
    console.log(`area = ${area.toFixed(4)}`)

}
cone(3,5)