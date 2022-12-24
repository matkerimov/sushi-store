// Добавляем прослушку на всем окне

window.addEventListener('click', function (event) {
    // Обьявляем переменную для счетчика
    let counter;


    // Проверяем клик строго по кнопкам Плюс или Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // Находим обертку сччетчика (родительский элемент)
        const counterWrapper = event.target.closest('.counter-wrapper')
        // Находим див с числом счетчика (дочерний элемент)
        counter = counterWrapper.querySelector('[data-counter]')
    }

    // Проверяем является ли елемент кнопкой Плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
    }

    // Проверяем является ли елемент кнопкой Минус
    if (event.target.dataset.action === 'minus') {

        // // Проверка на товар  который находится в корзине
        // if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
        //     console.log("in cart")
        //     // Удаляем товар из корзины
        //     event.target.closest('.cart-item').remove()
        // }

        // Проверяем чтобы счетчик был больше 1
        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике уменьшая его на 1
            counter.innerText = --counter.innerText

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Проверка на товар  который находится в корзине
            console.log("in cart")
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove()

            // Отаброжение статуса корзины Пустая / Полная
            toggleCartStatus()
        }


    }
})