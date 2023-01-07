const express = require('express');


const app = express();

app.use('/', require('./routes/pegar'));
app.use('/post', require('./routes/pegar'));// tudo que vier apos a url predefinida aqui, coloca-se na rota.


app.listen(8081, () => {
    console.log('Server is running in ' + "http://localhost:8081")
})