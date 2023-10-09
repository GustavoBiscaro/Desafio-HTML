const infoScreen = document.querySelector('#headerInfo');



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

// Exibir dados

function exibirDadosCadastrais(){
    personalInfoScreen.innerHTML = getName;
}



