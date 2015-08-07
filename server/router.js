var works = require('./controllers/works'),
    work  = require('./controllers/work');

module.exports = function(router) {
    router.route('/api/works')
        .post(works.addWork)
        .get(works.getAllWorks);

    router.route('/api/works/:work_id')
        .get(work.getWork)
        .delete(work.deleteWork)
        .put(work.updateWork);
};