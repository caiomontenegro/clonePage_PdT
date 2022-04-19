// Activate classes
const hamburger = document.querySelector('button.hamburguer-js')
const links = document.querySelectorAll('a#link-js')


// Responsive classes
const divLinks = document.querySelector('div.links-js')
const firstForm = document.querySelector('div.first-form-js')
const secondForm = document.querySelector('div.second-form-js')

// Status
let isMobile = false

// Events
hamburger.addEventListener('click', mobile)

links.forEach(link => {
    link.addEventListener('click', access)
})

// Actions
function mobile() {
    if (isMobile === false) {
        divLinks.style.display = 'flex'
        isMobile = true
    } else {
        divLinks.style.display = 'none'
        isMobile = false
    }
}

// testar com e sem evento como parametro

function access(evente) {
    const isActive = firstForm.classList.contains('is-active')
    if(isActive) {
        firstForm.classList.remove('is-active')
        secondForm.classList.add('is-active')
        return
    }
    firstForm.classList.add('is-active')
    secondForm.classList.remove('is-active')
}
