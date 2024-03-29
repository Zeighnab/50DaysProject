const range = document.getElementById('range')

range.addEventListener('input', (event) => {
    const value = +event.target.value
    const label = event.target.nextElementSibling

    const range_width = getComputedStyle(event.target).getPropertyValue('width')
    const label_width = getComputedStyle(label).getPropertyValue('width')

    const num_range = +range_width.substring(0, range_width.length - 2)
    const num_label = +label_width.substring(0, label_width.length - 2)

    const min = +event.target.min
    const max = +event.target.max

    const left = value * (num_range / max) - num_label / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`

    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}