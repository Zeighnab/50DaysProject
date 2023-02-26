const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const container = document.querySelector('.container')

openBtn.addEventListener('click', () => container.classList.add('show-nav'))

closeBtn.addEventListener('click', () => container.classList.remove('show-nav'))


function repeatedNumStr(str, num) {
    let repeatedStr = ''

    while(num > 0) {
        repeatedStr += str
        num--
    }
    
    return repeatedStr
}

console.log(repeatedNumStr('*', 3))