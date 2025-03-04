//Filename: ./routes/taskmanagementRoute.js*/

import express from "express";
import path from "path";
const router = express.Router();

let tasks = [];
let idCounter = 1;

// Display the main page with the list of tasks
router.get('/', (req, res) => {
    res.render('tasks', {tasks});
});

// Handle form submissions to add a new task
router.post('/add-task', (req, res) => {
    const { title, description } = req.body;
    tasks.push({ id: idCounter++, title, description, completed: false });
    res.redirect('/');
});

// Toggle the completed status of a task
router.post('/toggle-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
    }
    res.redirect('/');
});

// Delete a task by its ID
router.post('/delete-task/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    res.redirect('/');
});
    export default router;