const button = document.querySelector('.button')
const container = document.querySelector(`.container`)
const x = document.querySelector('.x')
const body = document.querySelector(`.body`)

button.addEventListener(`click`, () => {
    container.classList.add(`cont--open`)
    body.classList.add(`black`)
})
x.addEventListener(`click`, () => {
    container.classList.remove(`cont--open`)
    body.classList.remove(`black`)
})
