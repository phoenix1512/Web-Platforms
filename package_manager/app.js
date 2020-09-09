const log4Js = require('log4js');

const logger = log4Js.getLogger();
logger.level = 'error';

let x = 4;

//interpolacion `El valor de la variable es ${x}`
logger.trace(`El valor de la variable es ${x}`);
logger.debug(`El valor de la variable es ${x}`);
logger.info(`El valor de la variable es ${x}`);
logger.warn(`El valor de la variable es ${x}`);
logger.error(`El valor de la variable es ${x}`);
logger.fatal(`El valor de la variable es ${x}`);

function sumar(x, y) {
    return x + y;
}

module.exports = sumar;



