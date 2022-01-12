module.exports = function(app) {

    var invoice = require('../controllers/invoice.controller.js');

    // Retrieve all Invoices
    app.get('/invoices', invoice.findAll);
    // Delete a Invoice with invoiceId
    app.delete('/invoices/:invoiceId', invoice.delete);
    // Delete a Invoice with invoiceId
    app.post('/invoices/create', invoice.create);
     // Retrieve a single Invoice with invoiceId
     app.get('/invoices/:invoiceId', invoice.findOne);
     // Update a Invoice with invoiceId
    app.put('/invoices/:invoiceId', invoice.update);
}