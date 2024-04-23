//Formatação input DDD
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


//Formatação intup CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    var cpf = e.target.value.replace(/\D/g, '');
    cpf = cpf.substring(0, 11); // Limita o CPF a 11 caracteres (sem contar com os pontos e o traço)
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = cpf;
});

document.getElementById('cpf2').addEventListener('input', function (e) {
    var cpf = e.target.value.replace(/\D/g, '');
    cpf = cpf.substring(0, 11); // Limita o CPF a 11 caracteres (sem contar com os pontos e o traço)
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = cpf;
});

document.getElementById('cpf3').addEventListener('input', function (e) {
    var cpf = e.target.value.replace(/\D/g, '');
    cpf = cpf.substring(0, 11); // Limita o CPF a 11 caracteres (sem contar com os pontos e o traço)
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    e.target.value = cpf;
});

//Formatação input Numero do cartão
document.getElementById('numeroCartao').addEventListener('input', function (e) {
    var numeroCartao = e.target.value.replace(/\D/g, '');
    numeroCartao = numeroCartao.substring(0, 16); // Limita o número do cartão a 16 caracteres
    numeroCartao = numeroCartao.replace(/(\d{4})(\d)/g, '$1 $2'); // Adiciona espaços a cada 4 dígitos
    e.target.value = numeroCartao;
});

//Formatação input Validade 
document.getElementById('validadeInput').addEventListener('input', function (e) {
    var input = e.target;
    var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    var caretPosition = input.selectionStart; // Obtém a posição atual do cursor

    // Formata a entrada como MM/AA
    if (value.length > 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }

    // Ajusta a posição do cursor conforme necessário
    if (caretPosition === 3 || caretPosition === 6) {
        caretPosition++;
    }

    // Atualiza o valor no campo de entrada
    input.value = value;

    // Define a nova posição do cursor
    input.setSelectionRange(caretPosition, caretPosition);
});

//Formatar input CVV
document.getElementById("validadeInput-cvv").addEventListener("keydown", function(event) {
    var input = event.target;
    var valor = input.value;

    // Remove todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limita a quantidade de dígitos para 3
    valor = valor.substring(0, 3);

    // Define o valor formatado no campo de entrada
    input.value = valor;

    // Impede a ação padrão do evento keydown se o campo estiver cheio
    if (valor.length >= 3 && event.key !== 'Backspace' && event.key !== 'Delete') {
        event.preventDefault();
    }
});

//Formatar para Nome do cartão
document.getElementById("nomeCartaoInput").addEventListener("input", function(event) {
    var input = event.target;
    var valor = input.value;

    // Converte todo o texto para maiúsculas
    input.value = valor.toUpperCase();
});

//Formatar para parcelas
function toggleLabel(select) {
    var label = select.nextElementSibling;
    if (select.value !== '') {
        label.classList.add('active');
    } else {
        label.classList.remove('active');
    }

    // Função para atualizar as parcelas em tempo real
    var select = document.getElementById("floatingSelectGrid");
    var option = select.options[select.selectedIndex];
    var parcelas = document.getElementById("parcelas");
    parcelas.textContent = option.textContent;
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