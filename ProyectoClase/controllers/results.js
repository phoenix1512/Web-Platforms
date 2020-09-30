const express = require('express');

function sum(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    res.status(200).send(`${n1} + ${n2} = ${n1 + n2}`);
}

function multiply(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    res.status(200).send(`${n1} * ${n2} = ${n1 * n2}`);
}

function divide(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    if(n2 === 0){
        res.status(400).send('Error: No puedes dividir entre cero');
    }
    res.status(200).send(`${n1} / ${n2} = ${n1 / n2}`);
}

function pow(req, res, next) {
    const n1 = parseInt(req.body.n1);
    const n2 = parseInt(req.body.n2);
    res.status(200).send(`${n1} ^ ${n2} = ${Math.pow(n1, n2)}`);
}

function subtract(req, res, next) {
    const n1 = parseInt(req.params.n1);
    const n2 = parseInt(req.params.n2);
    res.status(200).send(`${n1} - ${n2} = ${n1 - n2}`);
}

module.exports = {
    sum, multiply, divide, pow, subtract
}