var chatContainer=document.querySelector('.chat-content')
var messages=chatContainer.children
var newMessageInput=document.querySelector('.chat-form-input')
var newMessageForm=document.querySelector('.chat-form')

var messageTemplate=document.querySelector('#message-template').content
var newMessageTemplate=messageTemplate.querySelector('.chat-message')



newMessageForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    var messageText=newMessageInput.value
    var newMessage=newMessageTemplate.cloneNode(true)

    newMessage.children[1].textContent=messageText
    newMessageInput.value=''
    deleteMessageHandler(newMessage);
    chatContainer.appendChild(newMessage)

})
var deleteMessageHandler = function (message) {
    var crossSign = message.querySelector('.chat-message-button');
    crossSign.addEventListener('click', function () {
        message.remove()
        console.log('adsf');
    });
}

for (var i = 0;i < messages.length;i++) {
    deleteMessageHandler(messages[i]);  }
/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
