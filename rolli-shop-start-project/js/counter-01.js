// Находим элементы на странице
const buttonMinus = document.querySelector('[data-action="minus"]')
const buttonPlus = document.querySelector('[data-action="plus"]')
const counter01 = document.querySelector('[data-counter]')


// Отслеживаем клик на кнопку buttonMinus
buttonMinus.addEventListener('click', function () {
console.log('minus')


    // Проверяем чтобы счетчик был больше 1
    if (counter01.innerText > 1){
        // Изменяем текст в счетчике уменьшая его на 1
        counter01.innerText = --counter01.innerText
    }



})

// Отслеживаем клик на кнопку buttonPlus

buttonPlus.addEventListener('click', function () {
    console.log('plus')
    counter01.innerText = ++counter01.innerText
})




