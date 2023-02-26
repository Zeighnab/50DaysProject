const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        removeActiveClass()
        button.parentNode.classList.toggle('active')
    })
})

function removeActiveClass() {
    buttons.forEach(button => {
        button.parentNode.classList.remove('active')
    })
}