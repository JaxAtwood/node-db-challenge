const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

module.exports = router;


router.get("/", (req, res) => {
    Projects.findAllProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Failed to retrieve projects" });
    })
})

router.get("/tasks", (req, res) => {
    Projects.findAllTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Failed to retrieve tasks" });
    })
})

router.get("/resources", (req, res) => {
    Projects.findAllResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Failed to retrieve resources" });
    })
})

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.findAllProjectsById(id)
    .then(project => {
        if (project) {
            res.status(200).json(project)
        } else {
            res.status(404).json({ errorMessage: "Could not retrieve this project by given id" })
        }
    })
    .catch(err => {
        res.status(500).json({ errorMessage: "Failed to retrieve Project" });
    })
})

router.post("/", (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to create new project" });
    })
})

router.post("/tasks", (req, res) => {
    const taskData = req.body;

    Projects.addTask(taskData)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to create new task" });
    })
})

router.post("/resources", (req, res) => {
    const resourceData = req.body;

    Projects.addResource(resourceData)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Failed to create new resource" });
    })
})