const dataService = require('../services/dataService');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await dataService.getAllProjects();
    res.json({ statusCode: 200, data: projects, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error fetching projects' });
  }
};

exports.addProject = async (req, res) => {
  try {
    const project = await dataService.addProject(req.body);
    res.status(201).json({ message: 'Project created', data: project });
  } catch (err) {
    res.status(400).json({ message: 'Failed to create project', error: err.message });
  }
};
