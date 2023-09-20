let toggleInfo = document.querySelector('.dropInfo');
let toggleDesc = document.querySelector('.dropDesc');
let secInfo = document.querySelector('.sec-info');
let secDesc = document.querySelector('.sec-desc');


toggleInfo.addEventListener('click', () => {

    if(secInfo.style.height == '685px'){
        secInfo.style.height = 'auto'; 
    }else{
        secInfo.style.height = '685px'; 
    } 
    
});

toggleDesc.addEventListener('click', () => {

    if(secDesc.style.height == '224px'){
        secDesc.style.height = 'auto'; 
    }else{
        secDesc.style.height = '224px'; 
    } 
    
});