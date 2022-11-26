function changeTextColor() {
    let bodyElement = document.getElementsByClassName('bodyContent')[0];
    const btn = document.querySelector('#change-button');
    if (bodyElement.getAttribute('text') === '#FFFFFF') {
        bodyElement.setAttribute('text', '#000000')
    }
    else {
        bodyElement.setAttribute('text', '#FFFFFF')
    }
    btn.innerHTML = (btn.innerHTML === 'Поменять цвет текста на белый') ? btn.innerHTML = 'Поменять цвет текста на чёрный' : btn.innerHTML = 'Поменять цвет текста на белый';
}
