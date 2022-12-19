// Находим элементы на странице
const buttonMinus = document.querySelector('[data-action="minus"]')
const buttonPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')


// Отслеживаем клик на кнопку buttonMinus
buttonMinus.addEventListener('click', function () {
console.log('minus')

    if (counter.innerText > 1){
        counter.innerText = --counter.innerText
    }



})

// Отслеживаем клик на кнопку buttonPlus

buttonPlus.addEventListener('click', function () {
    console.log('plus')
    counter.innerText = ++counter.innerText
})




