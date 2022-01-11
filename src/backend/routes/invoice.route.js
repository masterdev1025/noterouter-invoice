module.exports = function(app) {

    var invoice = require('../controllers/invoice.controller.js');

    // Retrieve all Invoices
    app.get('/invoices', invoice.findAll);

}