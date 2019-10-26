export default function formatDate(date) {
    let splited = date.split('/');
    let day = splited[1];
    let month = splited[0];
    let year = splited[2];

    let newDate = `${year}-${month}-${day}`;
    return newDate
}