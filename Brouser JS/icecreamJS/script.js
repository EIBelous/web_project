var assortmentData = [
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    },
    {
        inStock: true,
        isHit: true
    },
    {
        inStock: true,
        isHit: false
    },
    {
        inStock: false,
        isHit: false
    }
];

let updateCards=function(products){
    let elements=document.querySelectorAll('.good')
    console.log(elements)
    for (let i=0;i<elements.length;i++){
        let element=elements[i]

        let product=products[i]

        var availabilityClass='good--available';
        if (!product.inStock){
            availabilityClass='good--unavailable'}
        element.classList.add(availabilityClass)
        if(product.isHit){
            element.classList.add('good--hit')}

    }

}
updateCards(assortmentData)

/* Техническое задание

 На сайте магазина мороженого надо отображать актуальное состояние товаров: «в наличии», «нет в наличии», «хит».

Данные по продуктам хранятся в массиве с объектами assortmentData, каждый объект соответствует одному товару и содержит свойства:

- inStock. Если значение true — мороженое в наличии, если false — товара в наличии нет.
- isHit. Если значение true — мороженое самое популярное среди покупателей.

Каждому состоянию товара соответствует специальный класс:

Товар в наличии — good--available.
Недоступный товар — good--unavailable.
Хит продаж — good--hit.

Оформи код в виде функции updateCards, которая принимает на вход массив с данными. Вызови её, передав assortmentData.

*/
