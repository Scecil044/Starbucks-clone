const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const backdrop = document.getElementById('backdrop')
function toggleMenu() {
    btn.classList.toggle('open')
    menu.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
    backdrop.classList.toggle('active')

}
btn.addEventListener('click', toggleMenu)
backdrop.addEventListener('click', toggleMenu)