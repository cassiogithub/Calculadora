// declaracao de variaveis;
const resposta = document.getElementById('resultado'); 
var valores = [], operacao = [];

function addnumero(event) {
    let bt = event.target;
    resposta.textContent += bt.textContent;
}

function removerElemento() {
    let r = resposta.textContent;
    console.log(r);
    resposta.textContent = r.substring(0, r.length - 1)
}

function oparadores(event){
    let bt = event.target;
    
    valores.push(resposta.textContent);

    if (bt.textContent == '-') {
        operacao.push('-');
    }else if (bt.textContent == '+') {
        operacao.push('+');
    }else if (bt.textContent == '/') {
        operacao.push('/');
    }else if (bt.textContent == '*') {
        operacao.push('*');
    };
    

    resposta.textContent = '';
}

function result() {
    let res;

    console.log(valores);
    console.log(operacao);


    valores.push(resposta.textContent);

    for (let i = 0; i < operacao.length; i++) {
        if (operacao[i] == '-') {

            console.log('-');
            res += valores[i].parseFloat - parseFloat(valores[++i]);

        }else if (operacao[i] == '+') {  
            
            console.log(valores[i] +' + '+ valores[++i]);
            res += Number(valores[i]) + Number(valores[++i]); 

        }else if (operacao[i] == '/') {

            console.log('/');
            res = parseFloat(valores[i]) / parseFloat(valores[++i]);

        }else if (operacao[i] == '*') {

            console.log('*');
            res += parseFloat(valores[i]) * parseFloat(valores[++i]);

        };    
        console.log(res);
    }

    for (let i = 0; i < operacao.length; i++) {
        operacao.shift();
    
    }

    for (let i = 0; i < valores.length; i++) {
        valores.shift();
    
    } 

    console.log(valores);
    console.log(operacao);

    resposta.textContent = res;

    
}

function removerTudo() {
    for (let i = 0; i < operacao.length; i++) {
        operacao.shift();
    
    }

    for (let i = 0; i < valores.length; i++) {
        valores.shift();
    
    } 

    console.log(valores);
    console.log(operacao);

limpar();
}

function limpar() {
    resposta.textContent = '';
}