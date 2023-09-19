let span = document.querySelector(".sec-promo-body span");
let card = document.querySelectorAll('.card-header');
let btnCard = document.querySelectorAll('.btn-card-promo');
let arrow = document.querySelectorAll('.arrow');

//Pega a hora atual e adiciona ao elemento span
function updateClock(){
    
    let time = new Date();
    
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    span.innerHTML = `Termina em: ${fixZero(h)}:${fixZero(m)}:${fixZero(s)}`
}

// Retorna o argumento concatenado com zero caso o argumento for maior que 10, caso contrário retorna o próprio argumento
function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

//Chama a function updateClock em um intervalo de 1000 ms (1 sec)
window.onload = function(){

    setInterval(updateClock, 1000);
    updateClock();

};

//Adiciona o evento de entrada de mouse que remove os itens do elemento 'card-header' e adiciona duas imagens alinhadas ao fim
card.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        //Deleta o contéudo de 'card-header' e manipula as classes do elemento que definem seu alinhamento
        item.innerHTML = '';
        item.classList.remove('justify-content-between');
        item.classList.add('justify-content-end');
    
        //Cria duas imagens e adiciona ao elemento 'link'
        for (let index = 0; index <= 1; index++) {
                
            let link = document.createElement('a');
            let img = document.createElement('img');
            
            img.setAttribute('src', "assets/imgs/google.png");
            img.setAttribute('width', '32');
            img.setAttribute('heigth', '32');
            img.classList.add('marginR-8');

            link.append(img);

            item.append(link);
            
        }

    })

});

//Adiciona o evento de saída de mouse que remove os itens do elemento 'card-header' e adiciona duas div's alinhadas no início e fim, respectivamente
card.forEach((item) => {

    item.addEventListener('mouseleave', () => {

        //Deleta o contéudo de 'card-header' e manipula as classes do elemento que definem seu alinhamento
        item.innerHTML = '';
        item.classList.remove('justify-content-end');
        item.classList.add('justify-content-between');

        //Cria duas div's
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        //Adiciona classes as div's
        div1.classList.add('d-flex', 'col-md-6', 'justify-content-start', 'align-items-center');
        div2.classList.add('d-flex', 'col-md-6', 'justify-content-end', 'align-items-center', 'stars');

        //Cria duas imagens e adiciona ao elemento 'div1'
        for (let index = 0; index <= 1; index++) {

            let img = document.createElement('img');

            img.setAttribute('src', "assets/imgs/google.png");
            img.setAttribute('width', '32');
            img.setAttribute('heigth', '32');
            img.classList.add('marginR-8');
    
            div1.append(img);
            
        }

        //Cria cinco imagens e adiciona ao elemento 'div2'
        for (let index = 0; index < 5; index++) {

            let img = document.createElement('img');

            img.setAttribute('src', "assets/icons/star.svg");
            img.classList.add('marginR-8');
    
            div2.append(img);   
            
        }

        //Adiciona as duas div's ao elemento "card-header"
        item.append(div1);
        item.append(div2);
        
    })

});

btnCard.forEach((item) => {

    item.addEventListener('mouseenter', () => {

        item.innerHTML = '';

        let span = document.createElement('span');

        span.innerHTML = 'Comprar';

        item.append(span);

    });
});


btnCard.forEach((item) => {

    item.addEventListener('mouseleave', () => {

        item.innerHTML = '';

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let img = document.createElement('img');

        div2.style.fontSize = '10pt';
        img.setAttribute('src', "assets/icons/star.svg");
        img.style.width = '28px';
        img.style.height = '28px';

        div1.classList.add('d-flex', 'col-md-2', 'justify-content-center', 'align-items-center');
        div2.classList.add('d-flex', 'col-md-10', 'justify-content-center', 'align-items-center');

        div1.append(img);
        div2.innerHTML = 'Termina em:<br>00:00:00';

        item.append(div1);
        item.append(div2);


    });
});


