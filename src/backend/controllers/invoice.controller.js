var Invoice = require('../models/invoice.model.js');

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 2; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text + Math.floor(1000 + Math.random() * 9000);
}

exports.create = function (req, res) {
    // Create and Save a new Invoice
    if (!req.body) {
        res.status(400).send({ message: "Invoice can not be empty" });
    }

    var invoice = new Invoice({...req.body, id: makeid()});

    invoice.save(function (err, data) {
        if (err) {
            console.log(err);
            res.status(500).send({ message: "Some error occurred while creating the Invoice." });
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function (req, res) {
    // Retrieve and return all invoices from the database.
    Invoice.find(function (err, invoices) {
        if (err) {
            res.status(500).send({ message: "Some error occurred while retrieving invoices." });
        } else {
            res.send(invoices);
        }
    });
};

exports.delete = function (req, res) {
    // Delete a invoice with the specified invoiceId in the request
    Invoice.remove({ _id: req.params.invoiceId }, function (err, data) {
        if (err) {
            res.status(500).send({ message: "Could not delete invoice with id " + req.params.invoiceId });
        } else {
            res.send({ message: "Invoice deleted successfully!" })
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single invoice with a invoiceId
    Invoice.findById(req.params.invoiceId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve invoice with id " + req.params.invoiceId});
        } else {
            res.send(data);
        }
    });
};