const ToDoModel = require("../model/todo.model");

class ToDoService{

    static async getUserToDoList(userId){
        const todoList = await ToDoModel.find({userId})
        return todoList;
    }
    

}

module.exports = ToDoService;