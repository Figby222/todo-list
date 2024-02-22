import Todo from './createTodo.js';
import DOMController from './DOMControl.js';

console.log('hi');

const myTodo = new Todo("Todo 1", "My first todo", '2024-09-01', 'big', ['hello', 'hello', 'hello2']);
console.log(myTodo);

const element = document.createElement('div');
element.textContent = 'hello';

const DOMCtrl = new DOMController();

DOMCtrl.insertElement(element);

const DOMReady = DOMCtrl.renderTodo(myTodo);
DOMCtrl.insertElement(DOMReady);
