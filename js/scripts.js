const envioRegistro = document.querySelector('#envio')

/*Campos comuns*/
const nome = document.querySelector("#nome");
const dataNasc = document.querySelector("#nascimento");
const email = document.querySelector("#email");
const senha = document.querySelector('#password');
const mesmaSenha = document.querySelector('#repeat-password');

const media = document.querySelector('#nota');
const avaliacao = document.querySelector('#avaliar');

/* Selects */
const pais = document.querySelector('#pais');
const estado = document.querySelector('#estado');
const cidade = document.querySelector('#cidades');

/* radios */

envioRegistro.addEventListener('click', ()=> {
    console.log(cidade.value)
})


