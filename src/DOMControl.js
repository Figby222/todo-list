import { DOMTextInput, DOMDateInput, DOMCheckboxInput, DOMSelect } from './input';
import Project from './project.js';
import Todo from './createTodo.js';
import StorageInterface from './storage.js';

const storage = new StorageInterface();

const DOMController = function() {
    this.body = document.querySelector('body');
    this.currentRenderedProject;

    this.addProjectButton = document.querySelector('.newProject');
    this.dialog = document.querySelector('.create-project');
    this.projectSubmitButton = document.querySelector('.project-submit');

    this.projectSubmitButton.addEventListener('click', (e) => {
        const titleInput = document.querySelector('#project-title');

        if (titleInput.value) {
            this.dialog.open = false;

            const project = new Project(titleInput.value);
            this.createProject(project);
        }
    });

    this.addProjectButton.addEventListener('click', (e) => {
        e.preventDefault();

        this.dialog.open = true;

    });

}

DOMController.prototype.renderTodo = function (object, project) {
    const container = document.createElement('div');

    container.style.border = '2px solid black';

    const title = new DOMTextInput(object, 'Title: ', 'title', object.title);
    const dueDate = new DOMDateInput(object, 'Date: ', 'dueDate', object.dueDate);

    const description = new DOMTextInput(object, 'Description', 'description', object.description);
    const completed = new DOMCheckboxInput(object, 'Completed: ', 'completed', false);
    const priority = new DOMSelect(object, 'Priority: ', 'priority', ['Low', 'Medium', 'High']);
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete Todo';

    completeButton.addEventListener('click', (e) => {
        e.preventDefault();

        this.removeElement(container); // remove from DOM
        project.removeTodo(object); // remove from project
    });

    
    const loadDetailsButton = document.createElement('button');
    loadDetailsButton.textContent = '^';
    
    loadDetailsButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        object.loadDetails = !(object.loadDetails);
        
        // container.remove();
        
        this.renderProject(project);
    })
    
    container.appendChild(title.getContainer());
    container.appendChild(dueDate.getContainer());
    
    if (object.loadDetails) {
        container.appendChild(description.getContainer());
        container.appendChild(completed.getContainer());
        container.appendChild(priority.getContainer());
        container.appendChild(completeButton);
    }

    container.appendChild(loadDetailsButton);

    return container;
}

DOMController.prototype.removeElement = function(container) {
    container.remove();
}

DOMController.prototype.createProject = function(project) {
    const DOMNav = document.querySelector('.projects');
    
    const projectButton = document.createElement('button');
    
    


    projectButton.textContent = project.title;
    projectButton.classList.add(project.title);

    projectButton.addEventListener('click', (e) => {
        e.preventDefault();

    
        this.renderProject(project);
    });

    DOMNav.insertBefore(projectButton, this.addProjectButton);
    
    this.renderProject(project);
}

DOMController.prototype.renderProject = function(project) {
    if (this.currentRenderedProject) {
        // storage.populateStorage(this.currentRenderedProject);
        this.removeElement(this.currentRenderedProject.container);
    }

    console.log(project.title);

    storage.populateStorage(project);

    this.currentRenderedProject = project;

    const container = document.createElement('div');
    project.container = container;

    // const title = new DOMTextInput(project, 'Title: ', 'title', project.title)
    const title = document.createElement('div');
    title.textContent = project.title;
    // const description = new DOMTextInput(project, 'Description: ', `${project.title}-description`, project.description);

    

    
    container.appendChild(title);
    // container.appendChild(description.getContainer());
    
    project.todoList.forEach((todo) => {
        container.appendChild(this.renderTodo(todo, project));
    });
    
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = 'new todo';
    
    newTodoButton.addEventListener('click', (e) => {
        e.preventDefault;

        const newTodo = new Todo();

        project.addTodo(newTodo);

        this.renderProject(project);
    });

    const completeProject = document.createElement('button');
    completeProject.textContent = 'Complete Project';

    completeProject.addEventListener('click', (e) => {
        e.preventDefault();
        const projectButton = document.querySelector(`.projects > .${project.title}`);
        
        this.removeElement(container);
        projectButton.remove();
        storage.removeProject(project);
    })

    container.appendChild(newTodoButton);
    container.appendChild(completeProject);

    container.style.border = '2px solid red';
    this.insertElement(container, '.todos');
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = 
        (query == 'body') ? query :
        document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;