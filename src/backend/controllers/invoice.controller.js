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
