let week=['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

let getDayOfWeek=function(first,date){
    let firstNumberIndex=week.indexOf(first)


    return week[firstNumberIndex+date%7-1]
}
getDayOfWeek('воскресенье',11)



/* Техническое задание


Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием дня недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/