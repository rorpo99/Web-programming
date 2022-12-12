const changeColorOnWhite = 'Поменять цвет текста на белый';
const changeColorOnBlack = 'Поменять цвет текста на чёрный';
function changeTextColor() {
    let bodyElement = document.getElementsByClassName('bodyContent')[0];
    const btn = document.querySelector('#change-button');
    console.log(bodyElement.classList.toggle('white-theme'));
    btn.innerHTML = (btn.innerHTML === changeColorOnWhite) ?
        btn.innerHTML = changeColorOnBlack : btn.innerHTML = changeColorOnWhite;
}
