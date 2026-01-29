const router = require('express').Router();
const { enrollCourse, getCourses } = require('../controllers/courseController');

router.get('/', getCourses);
router.post('/enroll', enrollCourse);

module.exports = router;
