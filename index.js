let ham = document.querySelector('.ham-links')

let hamburger = document.querySelector('.hamburger')

let clicked = false

function noScroll() {
    window.scrollTo(0, 0);
}



hamburger.addEventListener('click', () => {
    if (!clicked) {
        ham.style.display = 'flex'
        clicked = true
        window.location.hash = 'top'
        window.addEventListener('scroll', noScroll)



    }
    else if (clicked) {
        ham.style.display = 'none'
        clicked = false
        window.removeEventListener('scroll', noScroll)
    }
})


