const Project = function
(
    title = 'project', 
    description = 'stuff', 
    todoList = [], 
    defaultProject = false
) {
    this.title = title;
    this.description = description;
    this.todoList = todoList;
    this.container;
    this.defaultProject = defaultProject;
}

Project.prototype.removeTodo = function (todo) {
    const index = this.todoList.indexOf(todo);

    if (index > -1) { // only splice if todo is found
        this.todoList.splice(index, 1);
    }
}

Project.prototype.addTodo = function (todo) {
    this.todoList.push(todo);
}

export default Project;