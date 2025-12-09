const express = require('express');
const router = express.Router();
const {
  getAllSubscribers,
  subscribe
} = require('../controllers/newsletterController');

router.get('/', getAllSubscribers);
router.post('/', subscribe);

module.exports = router;
