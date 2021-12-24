var cardList = document.querySelector('.products');
console.log(cardList.children);

var listItem = document.createElement('li');
listItem.classList.add('product');
cardList.appendChild(listItem);
console.log(cardList.children);

var title = document.createElement('h2');
title.classList.add('product__title');
title.textContent = 'Профессиональная селфи-палка';
listItem.appendChild(title);

var price = document.createElement('p');
price.classList.add('product__price');
price.textContent = '1000';
listItem.appendChild(price);
