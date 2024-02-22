import { TextInput, DateInput, CheckboxInput } from './input';
const DOMController = function() {
    this.body = document.querySelector('body');
}

DOMController.prototype.renderTodo = function (object) {
    const container = document.createElement('div');

    container.style.border = '2px solid black';

    const title = new TextInput('Title: ', 'title', object.title);
    const description = new TextInput('Description', 'description', object.description);
    const dueDate = new DateInput('Date: ', 'dueDate', object.dueDate);
    const completed = new CheckboxInput('Completed: ', 'completed', false);

    container.appendChild(title.getContainer());
    container.appendChild(dueDate.getContainer());
    container.appendChild(description.getContainer());
    container.appendChild(completed.getContainer());

    return container;
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;