const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const userName = document.querySelector('.username')
const role = document.querySelector('.role')

const testmonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'img/pic02.jpg',
        text: 
        "I've worked with literally hundreds of HTML/CSS developers and i have to say the top spot goes to this guy. This huy is an amzing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },

    {
        name: 'Brad Smith',
        position: 'Finance',
        photo: 'img/person_1.jpg',
        text: 
        "I've worked with literally hundreds of HTML/CSS developers and i have to say the top spot goes to this guy. This huy is an amzing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    },

    {
        name: 'Collins Avery',
        position: 'Project Manageer',
        photo: 'img/person_2.jpg',
        text: 
        "I've worked with literally hundreds of HTML/CSS developers and i have to say the top spot goes to this guy. This huy is an amzing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a thoroughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
    }
]


let idx = 1

function updateTestimonial() {
    const {name, position, photo, text } = testmonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testmonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)