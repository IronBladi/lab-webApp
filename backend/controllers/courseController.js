const Course = require('../models/courseModel');
const Enrollment = require('../models/enrollmentModel');
const User = require('../models/userModel');

exports.enrollCourse = async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    const existing = await Enrollment.findOne({ where: { UserId: userId, CourseId: courseId } });
    if (existing) return res.status(400).json({ msg: 'Ya inscrito en el curso' });

    await Enrollment.create({ UserId: userId, CourseId: courseId });
    res.json({ msg: 'Inscripción exitosa' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.getCourses = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};
