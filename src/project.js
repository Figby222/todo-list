const Project = function(title = 'project', description = 'stuff', todoList = []) {
    this.title = title;
    this.description = description;
    this.todoList = todoList;
}

export default Project;