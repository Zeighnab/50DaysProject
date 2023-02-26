const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July',
'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// toggleEl.addEventListener('click', () => {
//     const bodyEl = document.body

//     bodyEl.style.backgroundColor = '#e0e0e0'
//     toggleEl.innerText = 'Light Mode'
// })

toggleEl.addEventListener('click', (event) => {
    const html = document.querySelector('html')
    if(html.classList.contains('dark')) {
        html.classList.remove('dark')
        event.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        event.target.innerHTML = 'Light Mode'
    }
})

function setTime() {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours % 12
    const second = time.getSeconds()
    const minute = time.getMinutes()
    const amPm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(hoursForClock, 0, 11, 0, 360)
    }deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(minute, 0, 59, 0, 360)
    }deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${
        scale(second, 0, 59, 0, 360)
    }deg)`

    timeEl.innerHTML = `${hoursForClock}:${minute < 10 ? `0${minute}` : minute} ${amPm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min)
    + out_min;
}

setTime()

setInterval(setTime, 1000)