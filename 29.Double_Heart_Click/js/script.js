const loveMe = document.getElementById('loveMe')
const times = document.getElementById('times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (event) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(event)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (event) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = event.clientX
    const y = event.clientY

    const leftOffSet = event.target.offsetLeft
    const topOffSet = event.target.offsetTop

    const xInside = x - leftOffSet
    const yInside = y - topOffSet

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}