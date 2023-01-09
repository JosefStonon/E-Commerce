const express = require('express');
const  { init: inithandlebars } = require('./controllers/confHendlebars/handlebars');
const path = require('path');


const app = express();

inithandlebars(app);
app.use(express.static(path.join(__dirname, 'assets')));




app.use('/', require('./routes/pegar'));
app.use('/post', require('./routes/pegar'));// tudo que vier apos a url predefinida aqui, coloca-se na rota.


app.listen(8081, () => {
    console.log('Server is running in ' + "http://localhost:8081")
})
