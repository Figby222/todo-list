const StorageInterface = function() {
    this.projects = [];
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectsJSON = JSON.stringify(this.projects);

    const projectIndex = this.projects.indexOf(project);
    console.log(projectIndex);
    this.projects[projectIndex] = project; // save project changes onto projects

    localStorage.setItem('projects', projectsJSON);

    const currentStorage = localStorage.getItem('projects');

    console.log(JSON.parse(currentStorage));
    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

StorageInterface.prototype.addProject = function(project) {
    // add project to a let projects so that projects is basically static
}

export default StorageInterface;