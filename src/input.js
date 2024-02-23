const Input = function () {

};

Input.prototype.getContainer = function () {
    this.container.innerHTML = '';
    
    this.container.appendChild(this.DOMLabel);
    this.container.appendChild(this.DOMInput);
    
    return this.container;
};

Input.prototype.setValue = function(value) {
    object[id] = value;
    console.log(object);
};

Input.prototype.setLabel = function(label) {
    this.label = label;
    this.DOMLabel.textContent = label;
};

const TextInput = function(object, label, id, value) {
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
    this.DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(TextInput.prototype, Input.prototype);

const DateInput = function(object, label, id, value) {
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
    
    this.DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(DateInput.prototype, Input.prototype);

const CheckboxInput = function(object, label, id, checked) {
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

    this.DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.checked;
    });
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

const Select = function (object, label, id, options) {
    this.container = document.createElement('div');

    this.DOMLabel = document.createElement('label');
    this.DOMLabel.for = id;
    this.DOMLabel.textContent = label;

    this.DOMSelect = document.createElement('select');
    this.DOMSelect.id = id;
    this.DOMSelect.name = id;

    for (const option of options) {
        const DOMOption = document.createElement('option');
        DOMOption.value = option;
        DOMOption.textContent = option;

        this.DOMSelect.appendChild(DOMOption);
    }

    this.DOMSelect.addEventListener('change', (e) => {
        object[id] = e.target.value;
    });
}

Object.setPrototypeOf(Select.prototype, Input.prototype);

Select.prototype.getContainer = function() {
    this.container.innerHTML = '';

    this.container.appendChild(this.DOMLabel);
    this.container.appendChild(this.DOMSelect);

    return this.container;
}

export { TextInput, DateInput, CheckboxInput, Select };