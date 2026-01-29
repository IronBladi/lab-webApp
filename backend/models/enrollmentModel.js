const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./userModel');
const Course = require('./courseModel');

const Enrollment = sequelize.define('Enrollment', {
  progress: { type: DataTypes.FLOAT, defaultValue: 0 }
});

User.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(User, { through: Enrollment });

module.exports = Enrollment;
