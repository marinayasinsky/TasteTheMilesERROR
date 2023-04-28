const express = require('express');
const router = express.Router();
const nutritionTipsCtrl = require('../../controllers/api/nutritionTips');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// Routes for Nutrition Tips
router.get('/', nutritionTipsCtrl.index);

module.exports = router;
