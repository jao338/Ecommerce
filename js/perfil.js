let optionsLeft = document.querySelector('.options-left');
let optionsLeftEx = document.querySelector('.options-left-ex');
let optionsLeftAll = document.querySelector('.options-left-all');
let cols = document.querySelectorAll('.ops-left')

optionsLeft.addEventListener('mouseenter', () => {

    setTimeout(() => {

        optionsLeftEx.style.width = '212px';
        optionsLeftEx.style.left = '72px';

    },'500');
});


optionsLeftAll.addEventListener('mouseleave', () => {

    setTimeout(() => {

        optionsLeftEx.style.width = '72px';
        optionsLeftEx.style.left = '0px';

    },'500');

});

cols.forEach((item) => {

    item.addEventListener('mouseover', () => {

        item.style.backgroundColor = 'whitesmoke'

    });

});

cols.forEach((item) => {

    item.addEventListener('mouseout', () => {

        item.style.backgroundColor = 'white'

    });

});



