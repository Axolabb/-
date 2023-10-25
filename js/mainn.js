const button = document.querySelector('.button')
const container = document.querySelector(`.container`)
const x = document.querySelector('.x')
const bg = document.querySelector(`.bg`)
const body = document.querySelector(`.body`)

button.addEventListener(`click`, () => {
    container.classList.add(`cont--open`)
    bg.classList.add(`bg--active`)
    body.style.overflow = `hidden`;
    body.style.paddingRight = '17px';
})
x.addEventListener(`click`, () => {
    container.classList.remove(`cont--open`)
    bg.classList.remove(`bg--active`)
    body.style.overflow = `visible`;
    body.style.paddingRight = '0';
})
bg.addEventListener(`click`, () => {
    container.classList.remove(`cont--open`)
    bg.classList.remove(`bg--active`)
    body.style.overflow = `visible`;
    body.style.paddingRight = '0';
})
document.addEventListener(`keydown`, event => {
    if(event.code === `Escape`){
        container.classList.remove(`cont--open`)
        bg.classList.remove(`bg--active`)
        body.style.overflow = `visible`;
        body.style.paddingRight = '0';
    }
})
