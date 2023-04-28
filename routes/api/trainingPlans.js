const express = require('express');
const router = express.Router();
const trainingPlansCtrl = require('../../controllers/api/trainingPlans');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Routes for Training Plans
router.post('/', ensureLoggedIn, trainingPlansCtrl.create);
router.get('/', ensureLoggedIn, trainingPlansCtrl.index);
router.get('/:id', ensureLoggedIn, trainingPlansCtrl.show);
router.put('/:id', ensureLoggedIn, trainingPlansCtrl.update);
router.delete('/:id', ensureLoggedIn, trainingPlansCtrl.delete);

module.exports = router;
