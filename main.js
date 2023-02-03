const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];

let conteudo = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinhas();
    atualizarTabela();
    atualizaRodape();
});

function adicionarLinhas(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('telefone-contato');

    if (telefones.includes(inputTelContato.value)) {
        alert(`O telefone ${inputTelContato.value} já consta cadastrado na agenda.`);
    } else {
        telefones.push(inputTelContato.value);
        nomes.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += `</tr>`;

        conteudo += linha;
    }

    inputNomeContato.value ='';
    inputTelContato.value ='';
}

function atualizarTabela(){
    const Tabela = document.querySelector('tbody');
    Tabela.innerHTML = conteudo;
}

function atualizaRodape(){
    const rodape = document.querySelector('tfoot');
    const qtdeContatos = nomes.length;
    let conteudoRodape = '<tr>';
    conteudoRodape += '<td>Quantidade de telefones</td>';
    conteudoRodape += `<td>${qtdeContatos}</td>`;

    rodape.innerHTML = conteudoRodape;
}