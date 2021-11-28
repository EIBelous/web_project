/* Техническое задание

Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.

У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.

Функция должна возвращать количество документов, в названии которых есть необходимый год.

Если таких документов в массиве нет, функция должна возвращать 0.

*/
let name=['03032012','03022012','04042013','04052012']

console.log('20112012'.indexOf(2012))
let number=0;


let getDocumentsNumbers=function(name,year){

for(i=0;i< name.length;i++){
let check= name[i].indexOf(year,4)

if (check>-1){
console.log('zbs')
number+=1
console.log('vernet' +number)}else{
console.log(name[i])
console.log('nihuya')}

}
return number}
getDocumentsNumbers(name,2012)