function requiredReading (bookPage , readPagePerHour , dayForRead){
    let timeForRead = bookPage / readPagePerHour 
    let requiredHourPerDay = timeForRead / dayForRead 
    console.log(requiredHourPerDay)
}