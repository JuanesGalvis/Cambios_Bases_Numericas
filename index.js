const btnCalcular = document.getElementById('btn_calcular');

function PasarBaseFinal( number ) {
    
    let BaseFinal = document.getElementById('baseFinal').value;
    let NumeroFinal = [];
    let NumeroAConvertir = number;

    for (let i = 0; NumeroAConvertir >= BaseFinal; i++) {
        
        NumeroFinal[i] = parseInt(NumeroAConvertir % BaseFinal);
        NumeroAConvertir = parseInt(NumeroAConvertir / BaseFinal);

    }
    console.log(NumeroAConvertir);
    NumeroFinal.push(NumeroAConvertir)
    console.log(NumeroFinal);
    /** RETORNAR EL RESULTADO */
    const Result = document.getElementById('result');
    Result.innerText = NumeroFinal.reverse().join('')
}

function PasarBase10() {
    
    const NumeroOriginal = document.getElementById('original').value;

    const BaseOriginal = document.getElementById('baseOriginal').value;
    
    let NumeroDecimal = 0;

    for (let i = 0; i < NumeroOriginal.length; i++) {
        NumeroDecimal += ( parseInt(NumeroOriginal[(NumeroOriginal.length - 1) - i]) * Math.pow(BaseOriginal, i) );
    }

    PasarBaseFinal(NumeroDecimal);
}

btnCalcular.addEventListener('click', PasarBase10)