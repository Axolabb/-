const button = document.querySelector('.button')
const container = document.querySelector(`.container`)
const x = document.querySelector('.x')
const bg = document.querySelector(`.bg`)
const body = document.querySelector(`.body`)

button.addEventListener(`click`, () => {
    container.classList.add(`cont--open`)
    bg.classList.add(`bg--active`)
    body.style.overflow = `hidden`;
})
x.addEventListener(`click`, () => {
    container.classList.remove(`cont--open`)
    bg.classList.remove(`bg--active`)
    body.style.overflow = `visible`;
})
bg.addEventListener(`click`, () => {
    container.classList.remove(`cont--open`)
    bg.classList.remove(`bg--active`)
    body.style.overflow = `visible`;
})
document.addEventListener(`keydown`, event => {
    if(event.code === `Escape`){
        container.classList.remove(`cont--open`)
        bg.classList.remove(`bg--active`)
        body.style.overflow = `visible`;
        console.log(event.code)
    }
})
