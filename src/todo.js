const Todo = function (title = '', description = '', dueDate = '', priority = 'medium', notes = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorty = priority;
    this.notes = notes;
    this.complete = false;
    this.expanded = false;
}

Todo.prototype.changeCompletionStatus = function() {
    this.complete = !(this.complete);
}

export default Todo;