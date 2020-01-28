export default function userSun (day, month) {

    let userSun = "";

    switch (month) {
        case "03":
        if(day >= 21) {userSun = "Ariana(o)";} else {userSun = "Pisciana(o)";}
        break;

        case "04":
        if(day >= 20) {userSun = "Taurina(o)";} else {userSun = "Ariana(o)";}
        break;

        case "05":
        if(day >= 21) {userSun = "Geminiana(o)";} else {userSun = "Taurina(o)";}
        break;

        case "06":
        if(day >= 22) {userSun = "Canceriana(o)";} else {userSun = "Geminiana(o)";}
        break;

        case "07":
        if(day >= 23) {userSun = "Leonina(o)";} else {userSun = "Canceriana(o)";}
        break;

        case "08":
        if(day >= 23) {userSun = "Virginiana(o)";} else {userSun = "Leonina(o)";}
        break;

        case "09":
        if(day >= 23) {userSun = "Libriana(o)";} else {userSun = "Virginiana(o)";}
        break;

        case "10":
        if(day >= 23) {userSun = "Escorpiana(o)";} else {userSun = "Libriana(o)";}
        break;

        case "11":
        if(day >= 22) {userSun = "Sagitariana(o)";} else {userSun = "Escorpiana(o)";}
        break;

        case "12":
        if(day >= 22) {userSun = "Capricorniana(o)";} else {userSun = "Sagitariana(o)";}
        break;

        case "01":
        if(day >= 20) {userSun = "Aquariana(o)";} else {userSun = "Capricorniana(o)";}
        break;

        case "02":
        if(day >= 19) {userSun = "Pisciana(o)";} else {userSun = "Aquariana(o)";}
        break;
        
        default:
        break;
    }

    return userSun;

}