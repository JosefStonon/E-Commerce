const home = require('../controllers/home')
const express = require('express');
const route = express.Router();



route.get('/', home.handle);
route.get('/edit/:id', home.edit); //tudo que se quer colocar depois da url predefinida em app.js, é predifinido aqui...neste caso '/edit/:id'.

module.exports = route;