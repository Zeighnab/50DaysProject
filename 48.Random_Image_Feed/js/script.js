const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const btn = document.getElementById('submit')

btn.addEventListener('click', () => {
    const input = document.getElementById('row').value

    for(let i = 0; i < input * 3; i++) {
       const img = document.createElement('img')
       img.src = `${unsplashURL}${getRandomSize()}`
       container.appendChild(img)
    }

    function getRandomSize() {
        return `${getRandomNum()}x${getRandomNum()}`
    }

    function getRandomNum() {
        return Math.floor(Math.random() * 10) + 300
    }
})
