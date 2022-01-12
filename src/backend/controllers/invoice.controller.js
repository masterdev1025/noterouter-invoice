var Invoice = require('../models/invoice.model.js');

exports.findAll = function(req, res) {
    // Retrieve and return all invoices from the database.
    Invoice.find(function(err, invoices){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving invoices."});
        } else {
            res.send(invoices);
        }
    });
};

exports.delete = function(req, res) {
    // Delete a invoice with the specified invoiceId in the request
    Invoice.remove({_id: req.params.invoiceId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete invoice with id " + req.params.invoiceId});
        } else {
            res.send({message: "Invoice deleted successfully!"})
        }
    });
};