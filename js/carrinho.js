let arrowL = document.querySelector('.arrow-left');
let arrowR = document.querySelector('.arrow-right');

arrowL.addEventListener('click', () => {
    let qtdCart = document.querySelector('.qtd-cart');

    qtdCart.innerHTML = qtdCart.innerHTML--;
    alert(qtdCart.innerHTML);

});

arrowR.addEventListener('click', () => {
    let qtdCart = document.querySelector('.qtd-cart');

    qtdCart.innerHTML = qtdCart.innerHTML++;
    alert(qtdCart.innerHTML);

});