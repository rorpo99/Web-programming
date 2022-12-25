function addListElement(text) {
    let myLink = document.createElement('li');
    let nodeText = document.createTextNode(`${text}`);
    myLink.appendChild(nodeText);
    document.querySelector('#result_todo_list').appendChild(myLink);
}

function createListElement() {
    let task = document.getElementById('task').value;
    let task_time = document.getElementById('task_time').value;
    if (task_time !== "") {
        var d = new Date(task_time);
        var t_date = d.toLocaleDateString();
        var t_time = d.toLocaleTimeString().substring(0, 5);
        task_time = `${t_date} ${t_time} `;
    }
    let task_item = `${task_time} ${task}`;
    if (task !== "") {
        itemsArray.push(task_item);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addListElement(task_item);
    }
    else {
        alert("Заполните поле 'Дело'!")
    }
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

$(function() {
    var list = document.querySelector("#result_todo_list");
    console.log(list);
    list.addEventListener('click', function(ev) {
        console.log(ev.target.tagName);
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
});



