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

    container.appendChild(title.getContainer());
    container.appendChild(dueDate.getContainer());
    container.appendChild(description.getContainer());
    container.appendChild(completed.getContainer());
    container.appendChild(priority.getContainer());

    return container;
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;