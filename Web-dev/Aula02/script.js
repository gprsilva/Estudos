//Exercicio 1 - Aula 02
let nivelAcesso = document.getElementById('nivelAcesso');
let resultado = document.getElementById('resultado');

nivelAcesso.addEventListener('change', function(){
    let nivel = Number(nivelAcesso.value);

    resultado.textContent = verificarAcesso(nivel);
});

function verificarAcesso(nivel) {
    if (nivel === 3){
        return 'Acesso Total';
    }
    else if (nivel === 2){
        return 'Acesso Parcial';
    }
    else{
        return 'Acesso Negado';
    }
}


//Exercicio 2 - Aula 02
let formulario = document.getElementById('formNota');
let nota = document.getElementById('nota');
let resultadoNota = document.getElementById('resultadoNota');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let valorNota = Number(nota.value);
    resultadoNota.textContent = verificarNota(valorNota);
});

function verificarNota(nota) {
    switch (nota) {
        case 10:
            return 'Nota Máxima';

        case 9:
            return 'Muito Bom';

        case 8:
            return 'Muito Bom';

        case 7:
            return 'Bom';

        case 6:
            return 'Bom';

        case 5:
            return 'Regular';

        default:
            return 'Nota Inválida';
    }
}

//Exercicio 3 - Aula 02
let formNum = document.getElementById('formNum');
let num = document.getElementById('num');
let resultadoNum = document.getElementById('resultadoNum');

formNum.addEventListener('submit', function(e){
    e.preventDefault();
    let valorNum = Number(num.value);
    resultadoNum.textContent = verificarNumero(valorNum);
});

function verificarNumero(num) {

    let resultado = '';
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    return resultado;
}


//Exercicio 4 - Aula 02
let formSoma = document.getElementById('formSoma');
let soma = document.getElementById('soma');
let resultadoSoma = document.getElementById('resultadoSoma');

formSoma.addEventListener('submit', function(e){
    e.preventDefault();
    let valorSoma = Number(soma.value);
    resultadoSoma.textContent = verificarSoma(valorSoma);
});

function verificarSoma(soma) {
    let resultado = 0;
    for (let i = 1; i <= soma; i++) {
        resultado += i;
    }
    return resultado;
};

//Exercicio 5 - Aula 02
let formCal = document.getElementById('calculadora');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let operacao = document.getElementById('operacao');
let resultadoCalculadora = document.getElementById('resultadoCalculadora');

formCal.addEventListener('submit', function(e){
    e.preventDefault();
    let valorNum1 = Number(num1.value);
    let valorNum2 = Number(num2.value);
    let op = operacao.value;
    resultadoCalculadora.textContent = calcular(valorNum1, valorNum2, op);
});

function calcular(n1, n2, op) {
    switch (op) {
        case 'soma':
            return n1 + n2;
        case 'subtracao':
            return n1 - n2;
        case 'multiplicacao':
            return n1 * n2;
        case 'divisao':
            return n1 / n2;
        default:
            return 'Operação Inválida';
    }
}
