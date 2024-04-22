function formatarDDD() {
    var input = document.getElementById("inputDDD");
    var valor = input.value;
    
    valor = valor.replace(/\D/g, '');
    
    if (valor.length >= 2) {
        valor = "(" + valor.substring(0, 2) + ")" + valor.substring(2);
    }
    
    input.value = valor;

    if (input.value) {
        input.classList.add('placeholder-shown');
    } else {
        input.classList.remove('placeholder-shown');
    }
}

//PRINCIPAL

let credito = document.getElementById('card-credito');
let pix = document.getElementById('card-pix');
let xuliz = document.getElementById('card-xuliz');
let divCredito = document.getElementById('dados-titular-cartao');
let divPix = document.getElementById('dados-titular-pix');
let divXuliz = document.getElementById('dados-titular-xuliz');
let divGeral = document.getElementById('dados-titular');
let tipoPagamento = document.getElementById('tipo-pag');
let finalLogo = document.getElementById('logo-final');

credito.addEventListener('click', function(){

    if(divCredito.style.display === 'block'){
        divCredito.style.display = 'none';
    }else{
        divCredito.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divGeral quando credito é clicado
    divGeral.style.display = 'none';
    finalLogo.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Cartão de Crédito';
    tipoPagamento.setAttribute('src', './svg/cartao.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Até 1 dia útil';
});

pix.addEventListener('click', function(){

    if(divPix.style.display === 'block'){
        divPix.style.display = 'none';
    }else{
        divPix.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divGeral quando credito é clicado
    divGeral.style.display = 'none';
    finalLogo.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Pix';
    tipoPagamento.setAttribute('src', './svg/pix-cinza.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Imediato';
});

xuliz.addEventListener('click', function(){

    if(divXuliz.style.display === 'block'){
        divXuliz.style.display = 'none';
    }else{
        divXuliz.style.display = 'block';
    }

    if(finalLogo.style.display === 'block'){
        finalLogo.style.display = 'none';
    }else{
        finalLogo.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar com';

    // Ocultar divGeral quando credito é clicado
    divGeral.style.display = 'none';

     //Forma de pagamento
     document.getElementById('tipo').innerHTML = 'Xuliz Pay';
     tipoPagamento.setAttribute('src', './svg/xuliz-cinza.svg');
     tipoPagamento.style.marginRight = '10px';
 
     //Tempo de processamento
     document.getElementById('dia-util').innerHTML = 'Imediato';
});


//CARTÃO

let pix2 = document.getElementById('card-pix2');
let xuliz2 = document.getElementById('card-xuliz2');
let divCredito2 = document.getElementById('dados-titular-cartao');
let divPix2 = document.getElementById('dados-titular-pix');
let divXuliz2 = document.getElementById('dados-titular-xuliz');


pix2.addEventListener('click', function(){

    if(divPix2.style.display === 'block'){
        divPix2.style.display = 'none';
    }else{
        divPix2.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divCredito quando credito é clicado
    divCredito.style.display = 'none';
    finalLogo.style.display = 'none';

     //Forma de pagamento
     document.getElementById('tipo').innerHTML = 'Pix';
     tipoPagamento.setAttribute('src', './svg/pix-cinza.svg');
     tipoPagamento.style.marginRight = '10px';
 
     //Tempo de processamento
     document.getElementById('dia-util').innerHTML = 'Imediato';
});

xuliz2.addEventListener('click', function(){

    if(divXuliz2.style.display === 'block'){
        divXuliz2.style.display = 'none';
    }else{
        divXuliz2.style.display = 'block';
    }

    if(finalLogo.style.display === 'block'){
        finalLogo.style.display = 'none';
    }else{
        finalLogo.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar com';

    // Ocultar divCredito quando credito é clicado
    divCredito.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Xuliz Pay';
    tipoPagamento.setAttribute('src', './svg/xuliz-cinza.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Imediato';
});

//PIX

let credito3 = document.getElementById('card-credito3');
let xuliz3 = document.getElementById('card-xuliz3');
let divCredito3 = document.getElementById('dados-titular-cartao');
let divPix3 = document.getElementById('dados-titular-pix');
let divXuliz3 = document.getElementById('dados-titular-xuliz');

credito3.addEventListener('click', function(){

    if(divCredito.style.display === 'block'){
        divCredito.style.display = 'none';
    }else{
        divCredito.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divPix quando credito é clicado
    divPix.style.display = 'none';
    finalLogo.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Cartão de Crédito';
    tipoPagamento.setAttribute('src', './svg/cartao.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Até 1 dia útil';
});

xuliz3.addEventListener('click', function(){

    if(divXuliz.style.display === 'block'){
        divXuliz.style.display = 'none';
    }else{
        divXuliz.style.display = 'block';
    }

    if(finalLogo.style.display === 'block'){
        finalLogo.style.display = 'none';
    }else{
        finalLogo.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar com';

    // Ocultar divPix quando credito é clicado
    divPix.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Xuliz Pay';
    tipoPagamento.setAttribute('src', './svg/xuliz-cinza.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Imediato';
    logoFinal.setAttribute('src', './svg/finalizar-xuliz.svg');
});

//XULIZ

let credito4 = document.getElementById('card-credito4');
let pix4 = document.getElementById('card-pix4');
let divCredito4 = document.getElementById('dados-titular-cartao');
let divPix4 = document.getElementById('dados-titular-pix');

credito4.addEventListener('click', function(){

    if(divCredito.style.display === 'block'){
        divCredito.style.display = 'none';
    }else{
        divCredito.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divXuliz quando credito é clicado
    divXuliz.style.display = 'none';
    finalLogo.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Cartão de Crédito';
    tipoPagamento.setAttribute('src', './svg/cartao.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Até 1 dia útil';
});

pix4.addEventListener('click', function(){

    if(divPix.style.display === 'block'){
        divPix.style.display = 'none';
    }else{
        divPix.style.display = 'block';
    }

    document.getElementById('final-p').innerHTML = 'Finalizar pagamento';

    // Ocultar divXuliz quando credito é clicado
    divXuliz.style.display = 'none';
    finalLogo.style.display = 'none';

    //Forma de pagamento
    document.getElementById('tipo').innerHTML = 'Pix';
    tipoPagamento.setAttribute('src', './svg/pix-cinza.svg');
    tipoPagamento.style.marginRight = '10px';

    //Tempo de processamento
    document.getElementById('dia-util').innerHTML = 'Imediato';
});

