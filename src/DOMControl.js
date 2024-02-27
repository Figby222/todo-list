import { DOMTextInput, DOMDateInput, DOMCheckboxInput, DOMSelect } from './input';
import Project from './project.js';
import Todo from './todo.js';
import StorageInterface from './storage.js';
import './styles.css';

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

        titleInput.value = '';
    });

    this.addProjectButton.addEventListener('click', (e) => {
        e.preventDefault();

        this.dialog.open = true;

    });

}

DOMController.prototype.removeElement = function(container) {
    container.remove();
}

DOMController.prototype.createProject = function(project) {
    const DOMNav = document.querySelector('.projects');
    
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button');
    
    projectButton.textContent = project.title;
    
    project.class = project.title.split(' ');
    project.class = project.class.join('-').toLowerCase();
    
    projectButton.classList.add(project.class);
    
    projectButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        
        this.renderProject(project);
    });
    
    DOMNav.insertBefore(projectButton, this.addProjectButton);
    
    this.renderProject(project);
}

DOMController.prototype.renderProject = function(project) {
    if (this.currentRenderedProject) {
        this.removeElement(this.currentRenderedProject.container);
    }
    
    storage.populateStorage(project);
    
    this.currentRenderedProject = project;
    
    const DOMTodos = document.createElement('div');
    DOMTodos.classList.add('todos');

    const container = document.createElement('div');
    container.classList.add('project');
    project.container = container;
    
    const title = document.createElement('div');
    title.textContent = project.title;
    
    container.appendChild(title);
    // container.appendChild(description.getContainer());
    
    project.todoList.forEach((todo) => {
        DOMTodos.appendChild(this.renderTodo(todo, project));
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
        const projectButton = document.querySelector(`.projects > .${project.class}`);
        
        this.removeElement(container);
        projectButton.remove();
        storage.removeProject(project);
    })
    container.appendChild(DOMTodos);
    container.appendChild(newTodoButton);
    container.appendChild(completeProject);
    
    this.insertElement(container);
}

DOMController.prototype.renderTodo = function (object, project) {
    const container = document.createElement('div');
    container.classList.add('todo');

    const title = new DOMTextInput(object, 'Title: ', 'title', object.title);
    const dueDate = new DOMDateInput(object, 'Date: ', 'dueDate', object.dueDate);

    const description = new DOMTextInput(object, 'Description', 'description', object.description);
    const priority = new DOMSelect(object, 'Priority: ', 'priority', ['Low', 'Medium', 'High']);
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete Todo';

    completeButton.addEventListener('click', (e) => {
        e.preventDefault();

        project.removeTodo(object); // remove from project
        this.renderProject(project);
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
        container.appendChild(priority.getContainer());
        container.appendChild(completeButton);
    }

    container.appendChild(loadDetailsButton);

    return container;
}

DOMController.prototype.insertElement = (element, query = 'body') => {
    query = document.querySelector(query);

    query.appendChild(element);
}

export default DOMController;