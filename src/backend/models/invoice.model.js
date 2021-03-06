var mongoose = require('mongoose');

var InvoiceSchema = mongoose.Schema({
    id: String,
    createdAt: String,
    paymentDue: String,
    description:  String,
    paymentTerms: Number,
    clientName: String,
    clientEmail: String,
    status: String,
    senderAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String
    },
    clientAddress: {
      street: String,
      city: String,
      postCode: String,
      country: String
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
        total: Number
      }
    ],
    total: Number
}, {
    timestamps: false
});

module.exports = mongoose.model('Invoice', InvoiceSchema);