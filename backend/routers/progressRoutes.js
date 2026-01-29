const router = require('express').Router();
const { getProgress } = require('../controllers/progressController');

router.get('/:userId', getProgress);

module.exports = router;
