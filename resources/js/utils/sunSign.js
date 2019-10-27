export default function sunSign(date) {
    let sign = "";
    let day;
    let month;

    let splited = date.split("de")

    if(splited.length > 1) {
        day = Number(splited[0]);
        month = splited[1].trim();
    } else {
        splited = date.split('/');
        day = Number(splited[1]);
        month = splited[0];
    }

    switch (month) {
        case "Março" || "03":
        if(day >= 21) {sign = "Áries"} else {sign = "Peixes"}
        break;
        case "Abril" || "04":
        if(day >= 20) {sign = "Touro"} else {sign = "Áries"}
        break;
        case "Maio" || "05":
        if(day >= 21) {sign = "Gêmeos"} else {sign = "Touro"}
        break;
        case "Junho" || "06":
        if(day >= 22) {sign = "Câncer"} else {sign = "Gêmeos"}
        break;
        case "Julho" || "07":
        if(day >= 23) {sign = "Leão"} else {sign = "Câncer"}
        break;
        case "Agosto" || "08":
        if(day >= 23) {sign = "Virgem"} else {sign = "Leão"}
        break;
        case "Setembro" || "09":
        if(day >= 23) {sign = "Libra"} else {sign = "Virgem"}
        break;
        case "Outubro" || "10":
        if(day >= 23) {sign = "Escorpião"} else {sign = "Libra"}
        break;
        case "Novembro" || "11":
        if(day >= 22) {sign = "Sagitário"} else {sign = "Escorpião"}
        break;
        case "Dezembro" || "12":
        if(day >= 22) {sign = "Capricórnio"} else {sign = "Sagitário"}
        break;
        case "Janeiro" || "01":
        if(day >= 20) {sign = "Aquário"} else {sign = "Capricórnio"}
        break;
        case "Fevereiro" || "02":
        if(day >= 19) {sign = "Peixes"} else {sign = "Aquário"}
        break;
        default:
        break;
    }

return sign
}