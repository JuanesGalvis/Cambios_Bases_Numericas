const { PasarBaseFinal } = require('../src/index');

describe('Probando paso a Base Final', () => {
    const result = PasarBaseFinal(255, 2);
    test('Resultado en base 2 no contenga números mayores a 1', () => {

        expect(result).not.toMatch(/[2-9]/);
 
    });

    test('Resultado en base 2 no contenga números negativos', () => {
        expect( parseInt(result) ).not.toBeLessThan(0);
    });
});
