const Invoice = require("../models/Invoice.js");
const express = require("express");
const router = express.Router();

// Get All Invoices
router.get("/get-all", async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Craete Invoice
router.post("/add-invoice", async (req, res) => {
  try {
    const newInvoice = new Invoice(req.body);
    await newInvoice.save();
    res.status(200).json("Invoice created successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;