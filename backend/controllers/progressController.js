const Enrollment = require('../models/enrollmentModel');
const Course = require('../models/courseModel');

exports.getProgress = async (req, res) => {
  const { userId } = req.params;
  try {
    const enrollments = await Enrollment.findAll({
      where: { UserId: userId },
      include: Course
    });

    res.json(enrollments.map(e => ({
      course: e.Course.title,
      progress: e.progress
    })));
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
