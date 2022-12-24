function toggleCartStatus() {

    const cartWrapper = document.querySelector('.cart-wrapper')

    const cartEmptyBadge = document.querySelector('[data-cart-empty]')


    if (cartWrapper.children.length > 0){
        console.log('full')
        cartEmptyBadge.classList.add('none')
    }else{
        console.log('empty')
        cartEmptyBadge.classList.remove('none');

    }

}