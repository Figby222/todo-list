const Todo = function (title = '', description = '', dueDate = '', priority = 'medium', notes = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorty = priority;
    this.notes = notes;
    this.complete = false;

}

Todo.prototype.setTitle = function(text) {
    this.title = text;
}

Todo.prototype.setDescription = function(text) {
    this.description = text;
}

Todo.prototype.setDueDate = function(dueDate) {
    this.dueDate = dueDate;
}

Todo.prototype.setPriority = function(priority) {
    this.priority = priority;
}

Todo.prototype.setNote = function(index, text) {
    this.notes[index] = text;
}

Todo.prototype.changeCompletionStatus = function() {
    this.complete = !(this.complete);
}

Todo.prototype.completeTodo = function () {
    
}

export default Todo;