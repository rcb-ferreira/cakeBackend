const express = require('express');
const router = express.Router();

const Cakes = require('../controllers/cakes');

// Get cake
router.get('/cakes', Cakes.listAll);

// Get cake by id
router.get('/cakes/:id', Cakes.listById);

// Create cakes
router.post('/cakes', Cakes.create);

// Update cakes by id
router.put('/cakes/:id', Cakes.update);

// Delete cakes by id
router.delete('/cakes/:id', Cakes.delete);

module.exports = router;