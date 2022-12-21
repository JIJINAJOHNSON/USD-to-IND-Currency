let toggler = document.querySelector('.toggler');
let price = document.querySelectorAll('.price');
let dollar = document.querySelectorAll('.dollar');
let usd = 72.72;
toggler.onclick = () =>{
    toggler.classList.toggle('active');

    if(toggler.classList.contains('active')){

        for(var i = 0; i < dollar.length; i++){
            dollar[i].innerHTML = 'r';
        }
        for(var k = 0; k < price.length; k++){
            price[k].innerHTML = (price[k].innerHTML * usd).toFixed(2);
        }
    }else{

            for(var i = 0; i < dollar.length; i++){
                dollar[i].innerHTML = '$';        
        }
        for(var k = 0; k < price.length; k++){
            price[k].innerHTML = (price[k].innerHTML / usd).toFixed(2);
        }
    }
}