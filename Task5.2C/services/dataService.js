// services/dataService.js

const Project = require('../models/dataModel');

// Fetch all projects from MongoDB
const getAllProjects = async () => {
  return await Project.find({});
};

// Add a new project to MongoDB
const addProject = async (projectData) => {
  const newProject = new Project(projectData);
  return await newProject.save();
};

module.exports = {
  getAllProjects,
  addProject
};
