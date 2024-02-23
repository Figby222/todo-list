import { TextInput, DateInput, CheckboxInput, Select } from './input';
const DOMController = function() {
    this.body = document.querySelector('body');
}

DOMController.prototype.renderTodo = function (object) {
    const container = document.createElement('div');

    container.style.border = '2px solid black';

    const title = new TextInput(object, 'Title: ', 'title', object.title);
    const description = new TextInput(object, 'Description', 'description', object.description);
    const dueDate = new DateInput(object, 'Date: ', 'dueDate', object.dueDate);
    const completed = new CheckboxInput(object, 'Completed: ', 'completed', false);
    const priority = new Select(object, 'Priority: ', 'priority', ['Low', 'Medium', 'High']);
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete Todo';
    
    completeButton.addEventListener('click', (e) => {
        e.preventDefault();

        this.removeTodo(container);
    });

    container.appendChild(title.getContainer());
    container.appendChild(dueDate.getContainer());
    container.appendChild(description.getContainer());
    container.appendChild(completed.getContainer());
    container.appendChild(priority.getContainer());
    container.appendChild(completeButton);

    return container;
}

DOMController.prototype.removeTodo = function(container, object) {
    container.remove();

    // delete object;
}

DOMController.prototype.renderProject = function(project) {
    const container = document.createElement('div');

    

    const title = new TextInput(project, 'Title: ', `${project.title}-title`, project.title)
    const description = new TextInput(project, 'Description: ', `${project.title}-description`, project.description);

    

    const completeProject = document.createElement('button');
    completeProject.textContent = 'Complete Project';

    completeProject.addEventListener('click', (e) => {
        e.preventDefault();

        this.removeProject(container);
    })

    container.appendChild(title.getContainer());
    container.appendChild(description.getContainer());

    project.todoList.forEach((todo) => {
        container.appendChild(this.renderTodo(todo));
    });

    container.appendChild(completeProject);

    container.style.border = '2px solid black';
    this.insertElement(container);
}

DOMController.prototype.removeProject = function(project) {
    project.remove();
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = 
        !(query == 'body') ? query :
        document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;