const nav = document.querySelector('.nav')
const textEl = document.getElementById('text')
window.addEventListener('scroll', fixNav)
const text = 'Welcome To My Blog'
let idx = 1
let speed = 150

writeText()

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 660) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length) {
        return
    }
    setTimeout(writeText, speed)
}
