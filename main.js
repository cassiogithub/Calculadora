// declaracao de variaveis;
const resposta = document.getElementById('resultado'); 
var valores = [], operacao = [];

function addnumero(event) {
    let bt = event.target, text = event.target.textContent;
        
    if (text.indexOf('.') == -1) {
       if (bt.textContent == ','){
        resposta.textContent += '.';
        } 
    }else{
        throw 'erro';
    }
        
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
    let res = 0;

    console.log(valores);
    console.log(operacao);


    valores.push(resposta.textContent);

    for (let i = 0; i < operacao.length; i++) {
        if (operacao[i] == '-') {

            console.log('-');
            res = Number(valores[i]) - (valores[++i]);

        }else if (operacao[i] == '+') {  
            
            console.log(valores[i] +' + '+ valores[i+1]);
            res = Number(valores[i]) + Number(valores[++i]); 

        }else if (operacao[i] == '/') {

            console.log('/');
            res = Number(valores[i]) / Number(valores[++i]);

        }else if (operacao[i] == '*') {

            console.log('*');
            res = Number(valores[i]) * Number(valores[++i]);

        };    
        console.log(res);
    }

    while(operacao.length > 0) {
        operacao.shift();
    }
    while(valores.length > 0) {
        valores.shift();
    }
   
    console.log(valores);
    console.log(operacao);

    resposta.textContent = res;

    
}

function removerTudo() {
    while(operacao.length > 0) {
        operacao.shift();
    }
    while(valores.length > 0) {
        valores.shift();
    }  

    console.log(valores);
    console.log(operacao);

    limpar();
}

function limpar() {
    resposta.textContent = '';
}

function trocarSinal() {
    resposta.textContent = Number(resposta.textContent) * -1;
}