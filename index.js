const Parse = require('parse/node').Parse;

Parse.Cloud.afterSave(Parse.User, (req, res) => {
    let param = req.query.param;

    if(param)
        return Promise.resolve()
            .then(test => {
                res.success('test');
            })
            .catch(e => {
                res.error('Not ok');
            });

    res.success('Ok');
});