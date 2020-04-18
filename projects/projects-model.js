const db = require("../data/dbConfig.js");

module.exports = {
    addProject,
    addTask,
    addResource,
    findAllProjects,
    findAllTasks,
    findAllResources,
    findAllProjectsById,
}

function addProject(project) {
    return db("projects")
    .insert(project)
}

function addTask(task) {
    return db("tasks")
    .insert(task)
}

function addResource(resource) {
    return db("resources")
    .insert(resource)
}

function findAllProjects() {
    return db("projects")
}

function findAllProjectsById(id) {
    return db("projects")
    .where({id}).first()
}

function findAllTasks() {
    return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .select("tasks.description", "tasks.notes", "tasks.completed", "projects.name", "projects.description")
}

function findAllResources() {
    return db("resources")
}