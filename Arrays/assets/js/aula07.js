let formContato = document.getElementById('form-contato');
let divLista = document.getElementById('lista');
let nome = [];
let email = [];
let telefone = [];
let assunto = [];
let mensagem = [];


formContato.addEventListener('submit', (event) => {
    event.preventDefault();
    //Atribundo os valores
    nome.push(formContato.nome.value); /* o value e usado sempre para pega o dado da varialvel*/
    email.push(formContato.email.value);
    telefone.push(formContato.telefone.value);
    assunto.push(formContato.assunto.value);
    mensagem.push(formContato.mensagem.value);
    //preencher a div:
    gerarlista();
})

function gerarlista() {
    let auxiLista = '';
    for (let posicao = 0; posicao < nome.length; posicao++) {
        auxiLista += `<div class="card">
        <div class="dados-label">
            <div>Nome Completo:</div>
            <div>${nome[posicao]}</div>
        </div>
        <div class="dados-label">
            <div>Email:</div>
            <div>${email[posicao]}</div>
        </div>
        <div class="dados-label">
            <div>Telefone:</div>
            <div>${telefone[posicao]}</div>
        </div>
        <div class="dados-label">
            <div>Assunto:</div>
            <div>${assunto[posicao]}</div>
        </div>
        <div class="dados-label">
            <div>mensagem:</div>
            <div>${mensagem[posicao]}</div>
        </div>
         `
    }
    divLista.innerHTML = auxiLista
}