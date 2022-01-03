var list = document.querySelector('.todo-list');
var items = list.children;
var emptyListMessage = document.querySelector('.empty-tasks');
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector('.add-form-input');
var taskTemplate = document.querySelector('#task-template');
console.log(taskTemplate);

var toggleEmptyListMessage = function () {
    if (items.length === 0) {
        emptyListMessage.classList.remove('hidden');
    }
};

var addCheckHandler = function (item) {
    var checkbox = item.querySelector('.todo-list-input');
    checkbox.addEventListener('change', function () {
        item.remove();
        toggleEmptyListMessage();
    });
};

for (var i = 0; i < items.length; i++) {
    addCheckHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var taskText = newItemTitle.value;
});
