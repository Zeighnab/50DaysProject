const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const nameEl = document.getElementById('name')
const dateEl = document.getElementById('date')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgTexts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="img/desk2.jpeg" alt="" />'
    title.innerHTML ='Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nobis?'
    profileImg.innerHTML = '<img src="img/8.jpg" alt="">'
    nameEl.innerHTML = 'Jane Doe'
    dateEl.innerHTML = 'Aug 08, 2021'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))

    animatedBgTexts.forEach(bg => bg.classList.remove('animated-bg-text'))
}