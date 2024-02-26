const StorageInterface = function() {
    localStorage.setItem('projects', []);
    this.projects = [];
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectJSON = JSON.stringify(project);
    console.log(projectJSON);

    localStorage.setItem(project.title, projectJSON);

    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

export default StorageInterface;