const Task = require("../models/task")
let tasks = [
    new Task(1, "Task1", false),
    new Task(1, "Task2", true)
]

function getTasks(req, res) {
    res.render('index', {tasks})
}
module.exports = {
    getTasks,
}