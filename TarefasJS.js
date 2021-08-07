var quantidade ;
var nomeProduto = [];
var quantidadeProduto = [];

function salvarUser() {
    let nomeDeProduto = document.getElementById("produtoUser").value;
    let quantidadeDeProduto = document.getElementById("quantidadeUser").value;

    if (nomeDeProduto && quantidadeDeProduto) {
        nomeProduto.push(nomeDeProduto);
        quantidadeProduto.push(quantidadeDeProduto);
        criaLista();
        document.getElementById("produtoUser").value = "";
        document.getElementById("quantidadeUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th> Produtos </th><th> Quantidade </th><th> Ações </th></tr>";
    for (quantidade = 0; quantidade <= (nomeProduto.length - 1); quantidade++) {
        tabela += "<tr><td>" + nomeProduto[quantidade] + "</td><td>" + quantidadeProduto[quantidade] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
 
function logar() {
    let loginEmail = document.getElementById("emailUser").value;
    let loginSenha = document.getElementById("senhaUser").value;

    console.log(loginEmail);
    console.log(loginSenha);
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else{
        window.open("Tarefas.html")
    }
}

function excluir(quantidade) {
    nomeProduto.splice((quantidade - 1), 1);
    quantidadeProduto.splice((quantidade - 1), 1);
    document.getElementById("tabela").deleteRow(quantidade);
}

function editar(quantidade) {
    document.getElementById("produtoUser").value = nomeProduto[(quantidade - 1)];
    document.getElementById("quantidadeUser").value = quantidadeProduto[(quantidade - 1)];
    nomeProduto.splice(nomeProduto[(quantidade - 1)], 1);
    quantidadeProduto.splice(quantidadeProduto[(quantidade - 1)], 1);
}   