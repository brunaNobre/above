export default function userSun (day, month) {

    let userSun = "";

    switch (month) {
        case "03":
        if(day >= 21) {userSun = "Ariana";} else {userSun = "Pisciana";}
        break;

        case "04":
        if(day >= 20) {userSun = "Taurina";} else {userSun = "Ariana";}
        break;

        case "05":
        if(day >= 21) {userSun = "Geminiana";} else {userSun = "Taurina";}
        break;

        case "06":
        if(day >= 22) {userSun = "Canceriana";} else {userSun = "Geminiana";}
        break;

        case "07":
        if(day >= 23) {userSun = "Leonina";} else {userSun = "Canceriana";}
        break;

        case "08":
        if(day >= 23) {userSun = "Virginiana";} else {userSun = "Leonina";}
        break;

        case "09":
        if(day >= 23) {userSun = "Libriana";} else {userSun = "Virginiana";}
        break;

        case "10":
        if(day >= 23) {userSun = "Escorpiana";} else {userSun = "Libriana";}
        break;

        case "11":
        if(day >= 22) {userSun = "Sagitariana";} else {userSun = "Escorpiana";}
        break;

        case "12":
        if(day >= 22) {userSun = "Capricorniana";} else {userSun = "Sagitariana";}
        break;

        case "01":
        if(day >= 20) {userSun = "Aquariana";} else {userSun = "Capricorniana";}
        break;

        case "02":
        if(day >= 19) {userSun = "Pisciana";} else {userSun = "Aquariana";}
        break;
        
        default:
        break;
    }

    return userSun;

}