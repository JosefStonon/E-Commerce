const { LAYAOUTS_DIR, MASTER_DIR, VIEWS_DIR } = require("./confHendlebars/vars");
const { notifyer } = require("./loaders/loaderNotif");

const handle = (req, res) => {
    return res.render('main', {
        layout: MASTER_DIR,
     
    });
};

const Not = {
    async start() {
        try {
        await notifyer.init()
        notifyer.notify({ title: 'Hora do Post', body: 'crie algum conteudo para ajudar a comunidade'})
        } catch (err) {
            console.log(err.message)
        }
    }
};

function index(req, res) {
    return res.json('');
}

const edit = (req, res) => {
    return res.json('edit post')
}

module.exports = { index, edit, handle, Not }