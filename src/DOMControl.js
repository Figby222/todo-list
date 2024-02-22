const DOMController = function() {
    this.body = document.querySelector('body');
}

DOMController.prototype.convertObject = function (object) {
    const container = document.createElement('div');

    container.style.border = '2px solid black';

    const objectKeys = Object.keys(object);

    const titleInput = this.createInput('title', 'text', object.title);
    const descriptionInput = this.createInput('description', 'text', object.description);
    const dueDateInput = this.createInput('date', 'date', object.dueDate);
    const noteList = document.createElement('ul');
    let index = 0;

    for (const note of object.notes) {
        index++;
        const noteItem = document.createElement('li');
        noteItem.appendChild(this.createInput(`note${index}`, 'text', note));
        console.log(index);
        noteList.appendChild(noteItem);
    }
    // for (const key of objectKeys) {
    //     const propertyDiv = document.createElement('div');
    //     propertyDiv.textContent = `${key}: ${object[key]}`;

    //     container.appendChild(propertyDiv);
    // }

    container.appendChild(titleInput);
    container.appendChild(descriptionInput);
    container.appendChild(dueDateInput);
    container.appendChild(noteList);

    return container;
}

DOMController.prototype.createInput = function (labelId, type, value) {
    const container = document.createElement('div');

    const label = document.createElement('label');
    label.for = labelId;
    label.textContent = `${labelId.toUpperCase()}: `;

    const input = document.createElement('input');
    
    input.type = type;
    input.id = labelId;
    input.name = labelId;
    input.value = value;
    
    container.appendChild(label);
    container.appendChild(input);

    return container;

}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;