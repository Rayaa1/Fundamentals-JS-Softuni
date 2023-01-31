function biggestNum (a,b,c){
   if(a > b && a > c){
    console.log(a)
  }else if(b > a && b > c){
    console.log(b)
  }else if(c > a && c > b){
    console.log(c)
  }else if(a == b && b == c){
    console.log(a)
  }
}
biggestNum(2,7,3)