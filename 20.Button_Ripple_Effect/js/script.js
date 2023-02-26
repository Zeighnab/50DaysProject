const buttons = document.querySelector('.ripple')


buttons.addEventListener('click', function(event) {
    const x = event.clientX
    const y = event.clientY

    const buttonLeft = event.target.offsetLeft
    const buttonTop = event.target.offsetTop

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)


    setTimeout(() => circle.remove(), 500)
})