//Formatar uma data

function formatDate(string){
    let listData = string.split(',');
    return `${listData[2]} / ${listData[1]} / ${listData[0]}`;
}

let date1 = new Date();
function formatDate2(date) {
    let day =  date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString()
    return `${day} / ${month} / ${year}`;
}
console.log(formatDate('2015, 07, 07'));
console.log(formatDate2(date1));