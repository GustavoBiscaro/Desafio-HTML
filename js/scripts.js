// Campos padrão
const getName = document.getElementById('nome');
const getDate = document.getElementById('nascimento');
const getMail = document.getElementById('email');
const getAverage = document.getElementById('nota');
const getMessage = document.getElementById('avaliar');

// Botão
const getButton = document.querySelector('#botaoRequisicao');

// Selects e radios
const getCountry = document.querySelector('#pais');
const getState = document.querySelector('#estado');
const getCity = document.querySelector('#cidades');

const getGender = document.querySelectorAll('input[type="radio"][name="genero"]');


/* getButton.addEventListener('click', () => {
    console.log(getName.value);
    console.log(getDate.value);
    console.log(getMail.value);
    console.log(getAverage.value);
    console.log(getMessage.value);
    console.log(getCountry.value);
    console.log(getState.value);
    console.log(getCity.value);
});

 Mostrar gênero 

getGender.forEach(function(gender) {
    gender.addEventListener('change', function() {
        if(this.checked) {
            console.log("Opção selecionada: ", this.value);
        }   
    });
});

*/