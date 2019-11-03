export default function sunSign(date) {
    let sign = "";
    let day;
    let month;

    let splited = date.split("de")

    if(splited.length > 1) {
        day = Number(splited[0]);
        month = (splited.length > 3) ? "dezembro" : splited[1].trim().toLowerCase();
    } else {
        splited = date.split('-');
        day = Number(splited[2]);
        month = splited[1];
    }

    switch (month) {
        case "março":
        if(day >= 21) {sign = "aries";} else {sign = "pisces";}
        break;

        case "3":
        if(day >= 21) {sign = "aries";} else {sign = "pisces";}
        break;

        case "abril":
        if(day >= 20) {sign = "taurus";} else {sign = "aries";}
        break;

        case "4":
        if(day >= 20) {sign = "taurus";} else {sign = "aries";}
        break;

        case "maio":
        if(day >= 21) {sign = "gemini";} else {sign = "taurus";}
        break;

        case "5":
        if(day >= 21) {sign = "gemini";} else {sign = "taurus";}
        break;

        case "junho":
        if(day >= 22) {sign = "cancer";} else {sign = "gemini";}
        break;

        case "6":
        if(day >= 22) {sign = "cancer";} else {sign = "gemini";}
        break;

        case "julho":
        if(day >= 23) {sign = "leo";} else {sign = "cancer";}
        break;

        case "7":
        if(day >= 23) {sign = "leo";} else {sign = "cancer";}
        break;

        case "agosto":
        if(day >= 23) {sign = "virgo";} else {sign = "leo";}
        break;

        case "8":
        if(day >= 23) {sign = "virgo";} else {sign = "leo";}
        break;

        case "setembro":
        if(day >= 23) {sign = "libra";} else {sign = "virgo";}
        break;

        case "9":
        if(day >= 23) {sign = "libra";} else {sign = "virgo";}
        break;

        case "outubro":
        if(day >= 23) {sign = "scorpio";} else {sign = "libra";}
        break;

        case "10":
        if(day >= 23) {sign = "scorpio";} else {sign = "libra";}
        break;

        case "novembro":
        if(day >= 22) {sign = "sagitarius";} else {sign = "scorpio";}
        break;

        case "11":
        if(day >= 22) {sign = "sagitarius";} else {sign = "scorpio";}
        break;

        case "dezembro":
        if(day >= 22) {sign = "capricorn";} else {sign = "sagitarius";}
        break;

        case "12":
        if(day >= 22) {sign = "capricorn";} else {sign = "sagitarius";}
        break;

        case "janeiro":
        if(day >= 20) {sign = "aquarius";} else {sign = "capricorn";}
        break;

        case "1":
        if(day >= 20) {sign = "aquarius";} else {sign = "capricorn";}
        break;

        case "fevereiro":
        if(day >= 19) {sign = "pisces";} else {sign = "aquarius";}
        break;

        case "2":
        if(day >= 19) {sign = "pisces";} else {sign = "aquarius";}
        break;
        
        default:
        break;
    }

return sign 
}