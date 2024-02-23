const Project = function(title = 'project', description = 'stuff', todoList = []) {
    this.title = title;
    this.description = description;
    this.todoList = todoList;
}

Project.prototype.removeTodo = function (todo) {
    const index = this.todoList.indexOf(todo);

    if (index > -1) { // only splice if todo is found
        this.todoList.splice(index, 1);
    }
    console.log(this);
}

export default Project;