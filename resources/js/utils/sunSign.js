export default function sunSign(date) {
    let sign = ""
    let splited = date.split("de")
    let day = Number(splited[0]);
    let month = splited[1].trim();

    switch (month) {
        case "Março":
        if(day >= 21) {sign = "Áries"} else {sign = "Peixes"}
        break;
        case "Abril":
        if(day >= 20) {sign = "Touro"} else {sign = "Áries"}
        break;
        case "Maio":
        if(day >= 21) {sign = "Gêmeos"} else {sign = "Touro"}
        break;
        case "Junho":
        if(day >= 22) {sign = "Câncer"} else {sign = "Gêmeos"}
        break;
        case "Julho":
        if(day >= 23) {sign = "Leão"} else {sign = "Câncer"}
        break;
        case "Agosto":
        if(day >= 23) {sign = "Virgem"} else {sign = "Leão"}
        break;
        case "Setembro":
        if(day >= 23) {sign = "Libra"} else {sign = "Virgem"}
        break;
        case "Outubro":
        if(day >= 23) {sign = "Escorpião"} else {sign = "Libra"}
        break;
        case "Novembro":
        if(day >= 22) {sign = "Sagitário"} else {sign = "Escorpião"}
        break;
        case "Dezembro":
        if(day >= 22) {sign = "Capricórnio"} else {sign = "Sagitário"}
        break;
        case "Janeiro":
        if(day >= 20) {sign = "Aquário"} else {sign = "Capricórnio"}
        break;
        case "Fevereiro":
        if(day >= 19) {sign = "Peixes"} else {sign = "Aquário"}
        break;
        default:
        break;
    }

return sign
}