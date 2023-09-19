let arrow = document.querySelectorAll('.arrow');
let descP = document.querySelector('.descP')

arrow.forEach((item) => {

    item.addEventListener('click', () => {

        descP.style.display = 'none'

    });

});