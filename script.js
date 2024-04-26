//Formatação input DDD
function formatarDDD() {
    var input = document.getElementById("inputDDD");
    var valor = input.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
    
    // Formatar para "(99) 9 9999-9999"
    valor = valor.substring(0, 11); // Limitar o comprimento a 11 caracteres
    valor = valor.replace(/(\d{2})(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4");
    
    input.value = valor;

    // Adicionar ou remover a classe 'placeholder-shown' conforme necessário
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
    var numeroCartao = e.target.value.replace(/\D/g, ''); // Remover todos os caracteres não numéricos
    numeroCartao = numeroCartao.substring(0, 16); // Limitar o número do cartão a 16 caracteres
    numeroCartao = numeroCartao.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4"); // Adicionar espaços a cada 4 dígitos
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
    // Obter o elemento de entrada
    var input = event.target;

    // Obter o valor atual do campo
    var valor = input.value;

    // Remover todos os caracteres não numéricos
    valor = valor.replace(/\D/g, '');

    // Limitar a quantidade de dígitos para 3
    valor = valor.substring(0, 3);

    // Definir o valor formatado no campo de entrada
    input.value = valor;

    // Impedir a ação padrão do evento keydown se o campo estiver cheio
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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c').value = valorInput;

    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email').value = valorInput;

    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-pix').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-pix').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-pix').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-xuliz').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-xuliz').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-xuliz').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-pix').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-pix').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-pix').value = valorInput;

    // Pegar o valor do input principal-cpf
    var valorInput = document.getElementById('cpf').value;

    // Passar o valor para outro input-cpf
    document.getElementById('cpf2').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-xuliz').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-xuliz').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-xuliz').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c').value = valorInput;

    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email').value = valorInput;

    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-xuliz').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-xuliz').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-xuliz').value = valorInput;

     // Pegar o valor do input principal-cpf
     var valorInput = document.getElementById('cpf').value;

     // Passar o valor para outro input-cpf
     document.getElementById('cpf3').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c').value = valorInput;

    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email').value = valorInput;

    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell').value = valorInput;

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

    // Pegar o valor do input principal-Nome
    var valorInput = document.getElementById('floatingInputGroup1').value;

    // Passar o valor para outro input-Nome
    document.getElementById('floatingInputGroup1-c-pix').value = valorInput;


    // Pegar o valor do input principal-E-mail
    var valorInput = document.getElementById('floatingInputGroup2').value;

    // Passar o valor para outro input-E-mail
    document.getElementById('floatingInputGroup2-email-pix').value = valorInput;


    // Pegar o valor do input principal-Celular
    var valorInput = document.getElementById('inputDDD').value;

    // Passar o valor para outro input-Celular
    document.getElementById('inputDDD-cell-pix').value = valorInput;

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
