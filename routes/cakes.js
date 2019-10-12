const express = require('express');
const router = express.Router();

const Cakes = require('../controllers/cakes');

// Get cakes
router.get('/cakes', Cakes.listCakes);

// Get cakes by id
router.get('/cakes/:id', Cakes.listCakes);

// Create cakes
router.post('/cakes', Cakes.create);

// Update cakes by id
router.put('/cakes/:id', Cakes.update);

// Delete cakes by id
router.delete('/cakes/:id', Cakes.delete);

module.exports = router;