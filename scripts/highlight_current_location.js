function ready() {
    const path = document.location.pathname;
    let location = path.split('/').slice(-1)[0];
    let els = document.querySelectorAll('a[href=\'' + location + '\']');
    console.log(els.length);
    for (let i = 0; i < els.length; i++) {
        if (els[i].closest('aside') !== null) {
            els[i].classList.add("active-aside");
        } else {
            els[i].classList.add("active-nav");
        }
    }
}

function ready1() {
    const path = document.location.href;
    let els = document.querySelectorAll('a');
    for (let i = 0; i < els.length; i++) {
        if (path === els[i].href) {
            if (els[i].closest('aside') !== null) {
                els[i].classList.add("active-aside");
            } else {
                els[i].classList.add("active-nav");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", ready1);