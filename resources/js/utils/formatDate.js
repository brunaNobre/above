import formatMonth from './formatMonth';

export default function formatDate(date) {
    let newDate;
    let splited = date.split('/');
    
    if (splited.length > 1) {
        let day = splited[1];
        let month = splited[0];
        let year = splited[2];
        //format to save in database
        newDate = `${year}-${month}-${day}`;
    } else {
        splited = date.split('de');
        if(splited.length > 1) {
            let day = splited[0].trim();
            let month = splited[1].trim();
            let year = splited[2].trim();
            
            //format to use in new Date(MM/DD/YY) method
            newDate = `${formatMonth(month)}/${day}/${year}`;

        } else {
            splited = date.split('-');
            let day = splited[2].trim();
            let month = splited[1].trim();
            let year = splited[0].trim();
            //format to use in new Date(MM/DD/YY) method
            newDate = `${month}/${day}/${year}`;
        }
    }
    
    
    
   
    return newDate
}