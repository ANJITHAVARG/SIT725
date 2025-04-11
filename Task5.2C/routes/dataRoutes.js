// routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// GET all projects
router.get('/', dataController.getAllProjects);

// POST new project
router.post('/', dataController.addProject);

module.exports = router;
