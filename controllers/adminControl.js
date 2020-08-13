exports.admin = (req, res, next) => {
    res.render('messageModule');
}

exports.test = (req, res, next) => {
    var obj = {
        hi: 'hello'
    }
    res.json(obj);
}