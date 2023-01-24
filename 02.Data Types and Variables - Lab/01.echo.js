function solve (param){
    console.log(typeof (param))
   if(typeof (param) === "string" || typeof (param) === "number"){
    console.log(param)
   }else {
    console.log("Parameter is not suitable for printing")
   }
}
