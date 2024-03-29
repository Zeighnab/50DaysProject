const ratings = document.querySelectorAll('.rating')
const ratingContainer = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'Satisfied'

ratingContainer.addEventListener('click', (event) => {
    if(event.target.parentNode.classList.contains('rating')) {
        removeActive()
        event.target.parentNode.classList.add('active')

        selectedRating = event.target.innerHTML
    }
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer services</p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
       ratings[i].classList.remove('active')
    }
}