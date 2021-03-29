const { PasarBase10 } = require('../src/index');

describe('Probando paso a Base 10', () => {
    test('Probando paso a Base 10', () => {
        const result = PasarBase10('255', '10', '2');
        expect(result).toBe(255);
    });
});