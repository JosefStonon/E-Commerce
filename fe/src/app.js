import express from 'express';
import { engine } from 'express-handlebars';

const app = express();


app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars') 
app.set('views', './src/views'); //endereço da pasta views




//rotas

app.get('/cad', (req, res) => {
    res.render('form')
})



app.listen(8081, () => {
     console.log( 'Server is running!')
});