var pictures = [
    'gallery-tomato/tomato-red-large.jpg',
    'gallery-tomato/tomato-yellow-large.jpg',
    'gallery-tomato/tomato-strange-large.jpg'
];

var buttons=document.querySelectorAll('.gallery__picture-preview')

var fullPicture=document.querySelector('.full-picture')
var clickHandler=function(button,link){
    button.addEventListener('click',function(){
        fullPicture.src=link
    })}

for (var i=0;i<pictures.length;i++){
    clickHandler(buttons[i],pictures[i]) }


/* Техническое задание
fullPicture.src=pictures[2]
Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
