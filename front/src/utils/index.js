// function formatDate0(date) {
//     if(!date) return ''
//     const year = date.getFullYear();
//     const month = padZero(date.getMonth() + 1);
//     const day = padZero(date.getDate());
//     const hour = padZero(date.getHours());
//     const minute = padZero(date.getMinutes());
//     const second = padZero(date.getSeconds());
//     if (isNaN(year)) return '';
//     if (isNaN(month)) return '';
//     if (isNaN(day)) return '';
//     if (isNaN(hour)) return '';
//     if (isNaN(minute)) return '';
//     if (isNaN(second)) return '';
//     return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
// }


function formatDate(date) {
    if(!date) return ''
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    return `${year}-${month}-${day}`;
}



function padZero(num) {
    return num < 10 ? '0' + num : num.toString();
}

export {
    formatDate
}