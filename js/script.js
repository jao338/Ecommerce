let span = document.querySelector(".sec-promo-body span");
let card = document.querySelectorAll('.card-header');

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

card.forEach((item) =>{
     
    item.addEventListener('mouseout', () => {

        item.innerHTML = '';

    });

});

card.forEach((item) => {

    item.addEventListener('mouseover', () => {
        
        let link = document.createElement('a');
        let img = document.createElement('img');
        
        img.setAttribute('src', "assets/imgs/google.png");
        img.setAttribute('width', '32');
        img.setAttribute('heigth', '32');

        link.append(img)

        item.append(link);

    })

});
