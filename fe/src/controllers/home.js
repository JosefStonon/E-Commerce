const { LAYAOUTS_DIR, MASTER_DIR, VIEWS_DIR } = require("./confHendlebars/vars");

const handle = (req, res) => {
    return res.render('main', {
        layout: MASTER_DIR,
     
    });
};

const index = function(req, res) {
    return res.json('')
};

const edit = (req, res) => {
    return res.json('edit post')
}

module.exports = { index, edit, handle }