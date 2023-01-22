function solve (year){
  if(year % 400 == 0){
console.log("yes")
  return;}
    if(year % 4 == 0 ){
      if(year % 100 == 0){
console.log("no")
  return;}
        console.log("yes")
    }else {
        console.log("no")
    }
}