// declaracao de variaveis;
const resposta = document.getElementById('resultado'); 

function addnumero(event) {
    const bt = event.target;
    
    

    resposta.textContent += bt.textContent;
}

function da(event) {
    let r = resposta.textContent;
    console.log(r);
    resposta.textContent = r.substring(0, r.length - 1)
}