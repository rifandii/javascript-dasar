// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
const myDate = new Date(); 
 
// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021" 
const myDate1 = new Date(dateString); 
 
// #3 parameter dalam bentuk number, misal 87400000
const myDate2 = new Date(miliseconds); 
 
// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
const myDate3= new Date(year,month,date,hour,minute,second,millisecond); 

