const btnCalcular = document.getElementById('btn_calcular');

function ImprimirResultado( container, valorImprimir ) {
    Result.innerText = valorImprimir.reverse().join('')
}

function PasarBaseFinal( number, basef ) {
    
    let BaseFinal = basef;
    let NumeroFinal = [];
    let NumeroAConvertir = number;

    for (let i = 0; NumeroAConvertir >= BaseFinal; i++) {
        
        NumeroFinal[i] = parseInt(NumeroAConvertir % BaseFinal);
        NumeroAConvertir = parseInt(NumeroAConvertir / BaseFinal);

    }
    
    NumeroFinal.push(NumeroAConvertir)

    const Result = document.getElementById('result');
    if (Result) ImprimirResultado(Result, NumeroFinal);

    return NumeroFinal.reverse().join('');
}

function PasarBase10(numero, baseo, basef) {
    
    const NumeroOriginal = numero;
    const BaseOriginal = baseo;
    
    let NumeroDecimal = 0;

    for (let i = 0; i < NumeroOriginal.length; i++) {
        NumeroDecimal += ( parseInt(NumeroOriginal[(NumeroOriginal.length - 1) - i]) * Math.pow(BaseOriginal, i) );
    }

    PasarBaseFinal(NumeroDecimal, basef);
    return NumeroDecimal;
}

function CapturaDeValores() {
    const EOriginal = document.getElementById('original').value;
    const BOriginal = document.getElementById('baseOriginal').value;
    const BFinal = document.getElementById('baseFinal').value;

    PasarBase10(EOriginal, BOriginal, BFinal);
}

if (btnCalcular) btnCalcular.addEventListener('click', CapturaDeValores)

module.exports = {
    PasarBaseFinal,
    PasarBase10
}