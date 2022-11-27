function ready() {
    const path = document.location.pathname;
    let location = path.split('/').slice(-1)[0];

    let els = document.querySelectorAll('a[href=\'' + location + '\']');
    console.log(els.length);
    for(let i = 0; i < els.length; i++) {
        if (els[i].closest('aside') !== null) {
            els[i].classList.add("active-aside")
        }
        else {
            els[i].classList.add("active-nav")
        }
        console.log(els[i].closest('aside') !== null)
        console.log(els[i].classList)
    }
}

document.addEventListener("DOMContentLoaded", ready);