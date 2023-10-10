
const infoScreen = document.getElementById("headerInfo");
const infoRegisterScreen = document.getElementById("headerInfoRegister");


// Função para extrair os parâmetros da URL
function obterParametroPorNome(nome, url) {
    // Se a URL não for fornecida, use a URL atual da janela
    if (!url) url = window.location.href;
    // Escapar caracteres especiais no nome do parâmetro
    nome = nome.replace(/[\[\]]/g, "\\$&");
    // Criar uma expressão regular para procurar o parâmetro na URL
    var regex = new RegExp("[?&]" + nome + "(=([^&#]*)|&|#|$)");
    // Executar a expressão regular na URL
    var resultados = regex.exec(url);
    // Se não houver resultados, retornar nulo
    if (!resultados) return null;
    // Se o valor do parâmetro estiver ausente, retornar uma string vazia
    if (!resultados[2]) return '';
    // Decodificar o valor do parâmetro e substituir os "+" por espaços
    return decodeURIComponent(resultados[2].replace(/\+/g, " "));
}


var getName = obterParametroPorNome("nome");
var getDate = obterParametroPorNome("nascimento");
var getGender = obterParametroPorNome("genero");
var getEmail = obterParametroPorNome("email");
var getCountry = obterParametroPorNome("pais");
var getState = obterParametroPorNome("estado");
var getCity = obterParametroPorNome("cidades");
var getAverage = obterParametroPorNome("nota");
var getComments = obterParametroPorNome("avaliar");





if (getName !== null && infoScreen !== null) {
    infoScreen.innerHTML = "<h1 class='titleInfoPost'>Confira seus dados</h1><h2>Nome</h2><p>" + getName + "</p>" + "<h2>Data</h2><p>" + getDate + "</p>" + "<h2>Gênero</h2><p>" + getGender + "</p>" + "<h2>Email</h2><p>" + getEmail + "</p>" + "<h2>País</h2><p>" + getCountry + "</p>" + "<h2>Estado</h2><p>" + getState + "</p>" + "<h2>Cidade</h2><p>" + getCity + "</p>" + "<h2>Média</h2><p>" + getAverage + "</p>" + "<h2>Comentário</h2><p>" + getComments + "</p>";
    
} else {
    // Caso o parâmetro não tenha sido encontrado ou o elemento não exista, exiba uma mensagem de fallback
    elementoHeaderInfo.innerHTML = "<h1 class='titleInfoPost'>Localização</h1><p>Parâmetro não encontrado na URL.</p>";
}
