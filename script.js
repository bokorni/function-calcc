
let valor1 = document.querySelector('#valor-1')
let valor2 = document.querySelector('#valor-2')
let resul = document.querySelector('#resul')

let btSoma = document.querySelector('#btSoma')
btSoma.addEventListener('click', function () {
    Soma(Number(valor1.value), Number(valor2.value))
})

function Soma(a, b) {
    resul.innerHTML = (a + b);
}
let btSub = document.querySelector('#btSubtração')
btSub.addEventListener('click', function () {
    Subtração(Number(valor1.value), Number(valor2.value))
})

function Subtração(a, b) {
    resul.innerHTML = (a - b);
}

let btMulti = document.querySelector('#btMultiplicação')
btMulti.addEventListener('click', function () {
    Multiplicação(Number(valor1.value), Number(valor2.value))
})

function Multiplicação(a, b) {
    resul.innerHTML = (a * b);
}

let btdivi = document.querySelector('#btDivisão')
btdivi.addEventListener('click', function () {
    Divisão(Number(valor1.value), Number(valor2.value))
})

function Divisão(a, b) {
    resul.innerHTML = (a / b);
}

let reset = document.querySelector('#reset')
reset.addEventListener('click',function(){
    reset(resul.innerHTML = '')
})


const Lportugues = document.createElement('script');
Lportugues.src = 'idioma/portugues.js';
document.head.appendChild(Lportugues);

const Lespanhol = document.createElement('script');
Lespanhol.src = 'idioma/espanhol.js';
document.head.appendChild(Lespanhol);

const Lfrances = document.createElement('script');
Lfrances.src = 'idioma/frances.js';
document.head.appendChild(Lfrances);

const Lingles = document.createElement('script');
Lingles.src = 'idioma/english.js';
document.head.appendChild(Lingles);

let Idioma = document.querySelector('#idioma')
Idioma.addEventListener('change', function () {
    translate(this.value);
})

function translate(Idioma) {
    const traducao = (Idioma == 'es') ? espanhol() :
        (Idioma == 'en') ? ingles() :
            (Idioma == 'fr') ? frances() :
                (Idioma == 'br') ? portugues() :
                    null;
    setLanguage(traducao);
}
function setLanguage(traducao) {
    btSoma = document.getElementById('btSoma')
    btsub = document.getElementById('btSubtração')
    btMulti = document.getElementById('btMultiplicação')
    btdivisão = document.getElementById('btDivisão')
    titulo = document.getElementById('titulo')
    boasvindas = document.getElementById('boasVindas')

    btSoma.value = traducao.soma
    btsub.value = traducao.subtracao
    btMulti.value = traducao.multiplicacao
    btdivi.value = traducao.divisao
    titulo.innerHTML = traducao.titulo
    boasvindas.innerHTML = traducao.boasVindas
}


function portugues() {
    return{
        soma: 'Soma',
        subtracao: 'Subtração',
        multiplicacao: 'Multiplicação',
        divisao: 'Divisão',
        titulo: 'Calculadora',
      
    }
    
}


function ingles() {
    return{
        soma: 'Sum',
        subtracao: 'Subtract',
        multiplicacao: 'Multiplication',
        divisao: 'Division',
        titulo: 'Calculator',
       
    }
    
}


function espanhol(){
    return{
        soma: 'Sumar',
        subtracao: 'Sustración',
        multiplicacao: 'Multiplicación',
        divisao: 'División',
        titulo: 'Calculadora',
       
    }
    
}


function frances() {
    return{
        soma: 'Soma',
        subtracao: 'Soustraire',
        multiplicacao: 'Multiplicacion',
        divisao: 'Division',
        titulo: 'calculatrice',
        
    }
}
