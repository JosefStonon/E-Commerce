const index = function(req, res) {
    return res.json('home')
};

const edit = (req, res) => {
    return res.json('edit post')
}

module.exports = { index, edit }