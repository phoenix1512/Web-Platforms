const assert = require('assert');
const sumar = require('../app');

// eslint-disable-next-line no-undef
describe('Probar la suma de numeros', () => {
    //afirmar que cinco mas cinco es diez
    // eslint-disable-next-line no-undef
    it('cinco mas cinco es diez', () => {
        assert.equal(10, sumar(5, 5));
    });
    //afirmar que cinco mas cinco no son cincuenta y cinco
    // eslint-disable-next-line no-undef
    it('cinco mas cinco no son cincuenta y cinco', () => {
        assert.notEqual("55", sumar(5, 5));
    })
});