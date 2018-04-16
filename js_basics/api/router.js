// Require dependencies
const express = require('express');
const router = new express.Router();

// Require relationships controller
const relationshipsController = require('./app/controllers/relationships');

// API
router
    .get("/api/relationships", relationshipsController.relationships);

// Export router
module.exports = router;