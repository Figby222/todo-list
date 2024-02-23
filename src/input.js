const DOMInput = function () {

};

DOMInput.prototype.getContainer = function () {
    this._container.innerHTML = '';
    
    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMInput);
    
    return this._container;
};

DOMInput.prototype.setValue = function(value) {
    object[id] = value;
    console.log(object);
};

DOMInput.prototype.setLabel = function(label) {
    this._label = label;
    this._DOMLabel.textContent = label;
};

const DOMTextInput = function(object, label, id, value) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'text';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.value = value;
    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(DOMTextInput.prototype, DOMInput.prototype);

const DOMDateInput = function(object, label, id, value) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'date';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.value = value;
    
    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.value;
    });
};

Object.setPrototypeOf(DOMDateInput.prototype, DOMInput.prototype);

const DOMCheckboxInput = function(object, label, id, checked) {
    this._container = document.createElement('div');
    this._container.classList.add('input-container');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMInput = document.createElement('input');
    this._DOMInput.type = 'checkbox';
    this._DOMInput.id = id;
    this._DOMInput.name = id;
    this._DOMInput.checked = checked;

    this._DOMInput.addEventListener('input', (e) => {
        object[id] = e.target.checked;
    });
};

DOMCheckboxInput.setChecked = function ()  {
    this._DOMInput.checked = !(this._DOMInput.checked);
}

DOMCheckboxInput.prototype.setLabel = function(label) {
    this._label = label;
    this._DOMLabel.textContent = label;
};

DOMCheckboxInput.prototype.getContainer = function () {
    this._container.innerHTML = '';
    
    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMInput);
    
    return this._container;
};

const DOMSelect = function (object, label, id, options) {
    this._container = document.createElement('div');

    this._DOMLabel = document.createElement('label');
    this._DOMLabel.for = id;
    this._DOMLabel.textContent = label;

    this._DOMSelect = document.createElement('select');
    this._DOMSelect.id = id;
    this._DOMSelect.name = id;

    for (const option of options) {
        const DOMOption = document.createElement('option');
        DOMOption.value = option;
        DOMOption.textContent = option;

        this._DOMSelect.appendChild(DOMOption);
    }

    this._DOMSelect.addEventListener('change', (e) => {
        object[id] = e.target.value;
    });
}

Object.setPrototypeOf(DOMSelect.prototype, DOMInput.prototype);

DOMSelect.prototype.getContainer = function() {
    this._container.innerHTML = '';

    this._container.appendChild(this._DOMLabel);
    this._container.appendChild(this._DOMSelect);

    return this._container;
}

export { DOMTextInput, DOMDateInput, DOMCheckboxInput, DOMSelect };