import Todo from './createTodo.js';
import DOMController from './DOMControl.js';

console.log('hi');

const myTodo = new Todo("Todo 1", "My first todo", '2024-09-01', 'high', ['hello', 'hello', 'hello2']);
console.log(myTodo);

const element = document.createElement('div');
element.textContent = 'hello';

const DOMCtrl = new DOMController();

DOMCtrl.insertElement(element);

const DOMReady = DOMCtrl.renderTodo(myTodo);
DOMCtrl.insertElement(DOMReady);

const getPizza  = new Todo('Get Pizza', 'Cheese Pizza', '2024-03-01', 'high');

DOMCtrl.insertElement(DOMCtrl.renderTodo(getPizza))
