export default function sunSign(date) {
    let sign = "";
    let day;
    let month;

    let splited = date.split("de")

    if(splited.length > 1) {
        day = Number(splited[0]);
        month = splited[1].trim();
    } else {
        splited = date.split('-');
        day = Number(splited[2]);
        month = splited[1];
    }

    switch (month) {
        case "Março":
        if(day >= 21) {sign = "Áries";} else {sign = "Peixes";}
        break;

        case "3":
        if(day >= 21) {sign = "Áries";} else {sign = "Peixes";}
        break;

        case "Abril":
        if(day >= 20) {sign = "Touro";} else {sign = "Áries";}
        break;

        case "4":
        if(day >= 20) {sign = "Touro";} else {sign = "Áries";}
        break;

        case "Maio":
        if(day >= 21) {sign = "Gêmeos";} else {sign = "Touro";}
        break;

        case "5":
        if(day >= 21) {sign = "Gêmeos";} else {sign = "Touro";}
        break;

        case "Junho":
        if(day >= 22) {sign = "Câncer";} else {sign = "Gêmeos";}
        break;

        case "6":
        if(day >= 22) {sign = "Câncer";} else {sign = "Gêmeos";}
        break;

        case "Julho":
        if(day >= 23) {sign = "Leão";} else {sign = "Câncer";}
        break;

        case "7":
        if(day >= 23) {sign = "Leão";} else {sign = "Câncer";}
        break;

        case "Agosto":
        if(day >= 23) {sign = "Virgem";} else {sign = "Leão";}
        break;

        case "8":
        if(day >= 23) {sign = "Virgem";} else {sign = "Leão";}
        break;

        case "Setembro":
        if(day >= 23) {sign = "Libra";} else {sign = "Virgem";}
        break;

        case "9":
        if(day >= 23) {sign = "Libra";} else {sign = "Virgem";}
        break;

        case "Outubro":
        if(day >= 23) {sign = "Escorpião";} else {sign = "Libra";}
        break;

        case "10":
        if(day >= 23) {sign = "Escorpião";} else {sign = "Libra";}
        break;

        case "Novembro":
        if(day >= 22) {sign = "Sagitário";} else {sign = "Escorpião";}
        break;

        case "11":
        if(day >= 22) {sign = "Sagitário";} else {sign = "Escorpião";}
        break;

        case "Dezembro":
        if(day >= 22) {sign = "Capricórnio";} else {sign = "Sagitário";}
        break;

        case "12":
        if(day >= 22) {sign = "Capricórnio";} else {sign = "Sagitário";}
        break;

        case "Janeiro":
        if(day >= 20) {sign = "Aquário";} else {sign = "Capricórnio";}
        break;

        case "1":
        if(day >= 20) {sign = "Aquário";} else {sign = "Capricórnio";}
        break;

        case "Fevereiro":
        if(day >= 19) {sign = "Peixes";} else {sign = "Aquário";}
        break;

        case "2":
        if(day >= 19) {sign = "Peixes";} else {sign = "Aquário";}
        break;
        
        default:
        break;
    }

return sign 
}