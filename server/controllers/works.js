var Work = require('../models/works');

var WorkController = {
    addWork: function(req, res) {
        Work
            .create({
                name: req.body.name,
                description: req.body.description
            })
            .on('error', function(err) {
                if (err) {
                    res.send(err);
                }
            })
            .then(function () {
                res.json({
                    message: 'Work created!'
                });
            })
    },

    getAllWorks: function(req, res) {
        Work
            .find()
            .exec()
            .on('error', function(err) {
                if (err) {
                    res.send(err);
                }
            })
            .then(function(data) {
                res.json(data);
            })
    }
}

module.exports = WorkController;