import Todo from './createTodo.js';
import Project from './project.js';
import DOMController from './DOMControl.js';
import StorageInterface from './storage.js';

const storage = new StorageInterface();
const DOMCtrl = new DOMController();

let storedProjects = storage.getProjects();

if (!(storedProjects[0]) || !(storedProjects[0].defaultProject)) {
    const defaultProject = new Project('Default Project');
    defaultProject.defaultProject = true;

    storedProjects.unshift(defaultProject);
}

for (const project of storedProjects) {
    console.log(project);
    const currentProject = new Project(project.title, project.description, project.todoList, project.defaultProject);
    DOMCtrl.createProject(currentProject);
}

console.log('hi');

// let todoList = [];

// const myTodo = new Todo("Todo 1", "My first todo", '2024-09-01', 'high', ['hello', 'hello', 'hello2']);
// console.log(myTodo);

// const element = document.createElement('div');
// element.textContent = 'hello';



// // DOMCtrl.insertElement(element);

// // const DOMReady = DOMCtrl.renderTodo(myTodo);
// // DOMCtrl.insertElement(DOMReady);

// const getPizza  = new Todo('Get Pizza', 'Cheese Pizza', '2024-03-01', 'high');

// // DOMCtrl.insertElement(DOMCtrl.renderTodo(getPizza))

// todoList.push(myTodo);
// todoList.push(getPizza);

// let project = new Project('title', 'description', todoList);
// DOMCtrl.createProject(project);

// let todoList2 = [];
// todoList2.push(new Todo('TestTodo', 'hello', '2021-04-04', 'high', ['test']));
// todoList2.push(new Todo('hi', 'hi', '2024-02-24', 'high', ['test']));
// let project2 = new Project('myProject', 'description', todoList2);

// DOMCtrl.createProject(project2);


// DOMCtrl.renderProject(project);
// project.addTodo(new Todo('test', 'desc', '2024-10-04', 'low', ['test']))

// DOMCtrl.renderProject(project);

// project.forEach((todo) => {
//     DOMCtrl.insertElement(DOMCtrl.renderTodo(todo));
// })


// console.log(storage.getObject(JSON.stringify(project2)));

// console.log(localStorage.getItem(project2.title));