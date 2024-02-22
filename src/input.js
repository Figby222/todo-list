const Input = function () {

};

Input.prototype.getContainer = function () {
    this.container.innerHTML = '';
    
    this.container.appendChild(this.DOMLabel);
    this.container.appendChild(this.DOMInput);
    
    return this.container;
};

Input.prototype.setValue = function(value) {
    this.value = value;
    this.DOMInput.value = value;
};

Input.prototype.setLabel = function(label) {
    this.label = label;
    this.DOMLabel.textContent = label;
};

const TextInput = function(label, id, value) {
    this.container = document.createElement('div');
    this.container.classList.add('input-container');

    this.DOMLabel = document.createElement('label');
    this.DOMLabel.for = id;
    this.DOMLabel.textContent = label;

    this.DOMInput = document.createElement('input');
    this.DOMInput.type = 'text';
    this.DOMInput.id = id;
    this.DOMInput.name = id;
    this.DOMInput.value = value;




};

Object.setPrototypeOf(TextInput.prototype, Input.prototype);





const DateInput = function(label, id, value) {
    this.container = document.createElement('div');
    this.container.classList.add('input-container');

    this.DOMLabel = document.createElement('label');
    this.DOMLabel.for = id;
    this.DOMLabel.textContent = label;

    this.DOMInput = document.createElement('input');
    this.DOMInput.type = 'date';
    this.DOMInput.id = id;
    this.DOMInput.name = id;
    this.DOMInput.value = value;
};

Object.setPrototypeOf(DateInput.prototype, Input.prototype);

const CheckboxInput = function(label, id, checked) {
    this.container = document.createElement('div');
    this.container.classList.add('input-container');

    this.DOMLabel = document.createElement('label');
    this.DOMLabel.for = id;
    this.DOMLabel.textContent = label;

    this.DOMInput = document.createElement('input');
    this.DOMInput.type = 'checkbox';
    this.DOMInput.id = id;
    this.DOMInput.name = id;
    this.DOMInput.checked = checked;
};

CheckboxInput.setChecked = function ()  {
    DOMInput.checked = !(DOMInput.checked);
}

CheckboxInput.prototype.setLabel = function(label) {
    this.label = label;
    this.DOMLabel.textContent = label;
};

CheckboxInput.prototype.getContainer = function () {
    this.container.innerHTML = '';
    
    this.container.appendChild(this.DOMLabel);
    this.container.appendChild(this.DOMInput);
    
    return this.container;
};



export { TextInput, DateInput, CheckboxInput };