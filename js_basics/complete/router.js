// Require dependencies
const express = require('express');
const router = new express.Router();

// Require relationships controller and define API
const relationshipsController = require('./app/controllers/relationships');
router
    .get("/api/relationships", relationshipsController.relationships);

// Frontend controller and frontend routes
const frontendController = require('./app/controllers/frontend');
router
    // If the home (http://xyz.com/) gets requested, execute the function on the frontend Controller called "home"
    .get("/", frontendController.home)
    .get("/visualization", frontendController.visualization);

// Export router
module.exports = router;