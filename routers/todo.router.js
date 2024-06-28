const router = require("express").Router();
const ToDoController = require('../controller/todo.controller')

router.get('/getUserTodoList',ToDoController.getToDoList);


module.exports = router;