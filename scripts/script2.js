const start = Date.now();
window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    const end = Date.now();
    const elapsed = end - start;
    mylink=document.createElement('li');
    mylink.setAttribute('class', "footer-item");
    text=document.createTextNode("Page load time is " + elapsed.toString() + "ms")
    mylink.appendChild(text)
    document.getElementById('firstlink').appendChild(mylink)
};