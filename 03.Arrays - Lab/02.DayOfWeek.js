function dayOfWeek (arr){
    let day= ["Monday" , "Tuesday " , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
    if(arr >= 1 && arr <= 7){
        console.log(day[arr - 1])
    }else {
        console.log("Invalid day!")
    }
}
dayOfWeek([3])