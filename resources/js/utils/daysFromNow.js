import formatDate from './formatDate'

export default function daysFromNow(date, pickedDate) {
    //new Date("MM/DD/YY"); 

    date =  new Date(formatDate(date));  
    pickedDate = new Date(formatDate(pickedDate)); 


    let isForward =  (pickedDate >= date) ? true : false;
    let Difference_In_Time = 0;
    let Difference_In_Days = 0;

    if(pickedDate > date) {
        Difference_In_Time = pickedDate.getTime() - date.getTime(); 
    } else if (pickedDate < date) {
        Difference_In_Time =  date.getTime() - pickedDate.getTime(); 
    }
  
// To calculate the time difference of two dates 
  

if (Difference_In_Time) {
    Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24)); 

}
// To calculate the no. of days between two dates 
  
 return {
     days: Difference_In_Days,
     isForward: isForward,
     date: date,
     pickedDate: pickedDate

 }

}