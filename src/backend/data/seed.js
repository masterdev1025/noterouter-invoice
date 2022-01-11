const fs = require("fs");
const mongoose = require("mongoose");

// Load models
const Invoice = require("../models/invoice.model");
const dbConfig = require("../config/database.config")
// Connect to DB
mongoose.connect(dbConfig.url);

// Read JSON files
const invoices = JSON.parse(
    fs.readFileSync(`${__dirname}/seed/invoices.json`, "utf-8")
);

// Import into DB
const importData = async () => {
    try {
        await Invoice.deleteMany();
        console.log("Data Destroyed...");
        await Invoice.create(invoices);
        console.log("Data Imported...");
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

importData();
