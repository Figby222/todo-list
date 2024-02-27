const StorageInterface = function() {
    this.projects = [];
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectJSON = JSON.stringify(project);
    console.log(projectJSON);

    const projectIndex = this.projects.indexOf(project);
    console.log(projectIndex);
    this.projects[projectIndex] = project;

    localStorage.setItem(project.title, projectJSON);

    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

StorageInterface.prototype.addProject = function(project) {
    // add project to a let projects so that projects is basically static
}

StorageInterface.prototype.removeProject = function(project) {
    this.projects.splice(this.projects.indexOf(project), 1);
}

export default StorageInterface;