const express = require('express');

function list(req, res, next) {
    res.send('GET /users/ => list ');
}

function index(req, res, next) {
    res.send('GET /users/:id => index ');
}

function create(req, res, next) {
    res.send('POST /users/ => create ');
}

function replace(req, res, next) {
    res.send('PATCH /users/ => replace ');
}

function update(req, res, next) {
    res.send('PUT /users/ => update ');
}

function destroy(req, res, next) {
    res.send('delete /users/ => destroy ');
}

module.exports = {
    list, index, create, replace, update, destroy
}