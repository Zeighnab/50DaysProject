// const btnRight = document.getElementById('right')
// const btnLeft = document.getElementById('left')
// const images = document.getElementById('imgs')

// const img = document.querySelectorAll('#imgs img')

// let idx = 0

// let interval = setInterval(run, 2000)

// function run() {
//     idx++
//     changeImage()
// }

// function resetInterval() {
//     clearInterval(interval)
//     setInterval(run, 2000)
// }

// function changeImage() {
//     if(idx > img.length - 1) {
//         idx = 0
//     } else if(idx < 0) {
//         idx = img.length - 1
//     }

//     images.style.transform = `translateX(${-idx * 500}px)`
// }

// btnRight.addEventListener('click', () => {
//     idx++
//     changeImage()
//     resetInterval()
// })

// btnLeft.addEventListener('click', () => {
//     idx--
//     changeImage()
//     resetInterval()
// })



const images = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
})

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}