const nav = document.querySelector('.nav')
const textEl = document.getElementById('text')
const sidebar = document.querySelector('.sidebar')
window.addEventListener('scroll', fixNav)
const text = 'Welcome To My Blog'
let idx = 1
let speed = 150

writeText()

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 640) {
        sidebar.classList.remove('hide')
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
        sidebar.classList.add('hide')
    }
}

function writeText() {
    textEl.innerText = text.slice(0, idx)
    idx++
    if (idx > text.length) {
        return
    }
    setTimeout(writeText, speed)
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function () {
    console.log('callback - particles.js config loaded');
});