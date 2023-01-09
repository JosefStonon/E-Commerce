const {engine} = require('express-handlebars');
const { PARTIALS_DIR, LAYAOUTS_DIR, VIEWS_DIR } = require('./vars');

exports.init = (app) => {
app.engine('html',
     engine({       
    extname: 'html',
    partialsDir: PARTIALS_DIR,
    layoutsDir: LAYAOUTS_DIR,
    })
);

app.set('view engine', 'html');
app.set('views', VIEWS_DIR)
};