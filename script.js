function nomeCartao(){
    let nomeCopy = document.querySelector('#name_camp');
    let nomePaste = document.querySelector('.datacard_part2');
    let nomeErro = document.querySelector('.name_error');

    if (!nomeCopy){
        nomeErro.style.display = 'block';
    }
    
    if (nomeCopy.value.length >= 1){
        nomePaste.innerText = nomeCopy.value
    }else {
        nomePaste.innerText = 'NOME'
    }
}

function numeroCartao(){
    let numeroCopy = document.querySelector('#cardnumb_camp')
    let numeroPaste = document.querySelector('#datacard_numb')

    numeroCopy.addEventListener('keypress', () => {
        let numeroCopyL = numeroCopy.value.length

        if (numeroCopyL === 4 || numeroCopyL === 9 || numeroCopyL === 14 ){
            numeroCopy.value += ' '
        }       
    })

    if (numeroCopy.value.length >= 1){
        numeroPaste.innerHTML = numeroCopy.value
    }else{
        numeroPaste.innerHTML = '0000 0000 0000 0000'
    }
}


function datasCartao() {
    let mes = document.querySelector('#date_month').value
    let ano = document.querySelector('#date_year').value
    let dataFormat = (mes + '/' + ano)
    let dataPaste = document.querySelector('.datacard_part3')

    dataPaste.innerHTML = dataFormat;
}

function codCartao(){
    let codCopy = document.querySelector('#cvv_camp').value
    let codPaste = document.querySelector('.datacard_cvv')

    if(codCopy.length >=1){
        codPaste.innerHTML = codCopy
    }else{
        codPaste.innerHTML = '000'
    }
}

// Form Error

let nameCamp = document.querySelector('#name_camp')
let numbCamp = document.querySelector('#cardnumb_camp')
let dataMonth = document.querySelector('#date_month')
let dataYear = document.querySelector('#date_year')
let cvvCamp = document.querySelector('#cvv_camp')

let labelNameError = document.querySelector('.name_error')
let labelNumbError = document.querySelector('.numb_error')
let labelDataError = document.querySelector('.data_error')
let labelCvvError = document.querySelector('.cvv_error')

nameCamp.addEventListener('input', function() {
    if(nameCamp.value.length < 1){
        labelNameError.classList.add('visible')
    } 
    if(nameCamp.value.length > 1){
        labelNameError.classList.remove('visible')
    }
})

nameCamp.addEventListener('blur', function() {
    if (nameCamp.value === '') {
      // Exibir mensagem de aviso ao usuário
      labelNameError.classList.add('visible')
    }else {
        labelNameError.classList.remove('visible')
    }
})


numbCamp.addEventListener('input', function() {
    if (numbCamp.value.length < 19) {
      labelNumbError.classList.add('visible');
    }else {
      labelNumbError.classList.remove('visible');
    }
  });

numbCamp.addEventListener('blur', function() {
    if (numbCamp.value === '' || numbCamp.value.length < 19) {
      // Exibir mensagem de aviso ao usuário
      labelNumbError.classList.add('visible')
    }else {
        labelNumbError.classList.remove('visible')
    }
})

numbCamp.addEventListener('keydown', function(event) {
    if (event.key !== "Backspace" && event.key !== "Control" && event.key !== "Tab" && event.key !== "ArrowLeft" && event.key !== "ArrowRight" && isNaN(parseInt(event.key))) {
      event.preventDefault();
    }
});


dataMonth.addEventListener('input', function(){
    if(dataMonth.value > 12){
        labelDataError.classList.add('visible')
    }else{
        labelDataError.classList.remove('visible')
    }
})   

dataMonth.addEventListener('blur', function() {
    if (dataMonth.value === '' || dataMonth.value > 12) {
      // Exibir mensagem de aviso ao usuário
      labelDataError.classList.add('visible')
    }else {
        labelDataError.classList.remove('visible')
    }

})


dataYear.addEventListener ('input', function() {
    if(dataYear.value < 23){
        labelDataError.classList.add('visible')

    }else{
        labelDataError.classList.remove('visible')
    }
})   

dataYear.addEventListener('blur', function() {
    if (dataYear.value === '' || dataYear.value < 23) {
      // Exibir mensagem de aviso ao usuário
      labelDataError.classList.add('visible')
    }else {
        labelDataError.classList.remove('visible')
    }

})


cvvCamp.addEventListener('input', function() {

    if(cvvCamp.value.length < 2){
        labelCvvError.classList.add('visible')
    }
    if(cvvCamp.value.length > 2){
        labelCvvError.classList.remove('visible')
    }
})

cvvCamp.addEventListener('blur', function() {
    if (cvvCamp.value === '') {
      // Exibir mensagem de aviso ao usuário
      labelCvvError.classList.add('visible')
    }else {
        labelCvvError.classList.remove('visible')
    }
})


// Tela de confirmação || Confirmation Screen

let buttonConfirmed = document.querySelector('.validar')
let confirmedScreen = document.querySelector('.confirmedScreen');
let formScreen = document.querySelector('.formbox');


function verificarIputs(){
    let inputs = formScreen.querySelectorAll('input')

    for (const input of inputs){
        if(input.value === ''){
            return false;
        }
    }
    return true;
}

function trocarDeTela() {
    formScreen.classList.add('invisible')
}

const submitButton = document.querySelector('.validar');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  if (verificarIputs()) {
    confirmedScreen.classList.add('visible');
    trocarDeTela();
  } else {
    confirmedScreen.classList.remove('visible');
  }
});
