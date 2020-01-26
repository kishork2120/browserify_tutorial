exports.nextDate = (date)=>{
    date = new Date(date);
    return new Date(date.setDate(date.getDate()+1));
}