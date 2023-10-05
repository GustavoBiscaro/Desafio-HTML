const nome = document.querySelector("#nome");
const dataNasc = document.querySelector("#nascimento");
const email = document.querySelector("#email");
const senha = document.querySelector('#password');
const mesmaSenha = document.querySelector('#repeat-password');
const pais = document.querySelector('#pais');
const botao = document.querySelector('#exibir')
const media = document.querySelector('#nota');
const avaliacao = document.querySelector('#avaliar');

console.log(botao)
botao.addEventListener('click', () => {
    console.log(pais.value)
})


