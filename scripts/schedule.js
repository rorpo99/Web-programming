function addListElement(text) {
    let myLink = document.createElement('li');
    let nodeText = document.createTextNode(`${text}`);
    myLink.appendChild(nodeText);
    document.querySelector('#result_todo_list').appendChild(myLink);
}

function createListElement() {
    let task = document.getElementById('task').value;
    let task_time = document.getElementById('task_time').value;
    let task_item = `${task_time} ${task}`;
    itemsArray.push(task_item);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    addListElement(task_item);
}

document.addEventListener("submit", createListElement);

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
document.ready = function()  {
    data.forEach(item => {
        addListElement(item);
    });
};



