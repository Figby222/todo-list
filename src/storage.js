const StorageInterface = function() {
    this.projects = [];
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectsJSON = JSON.stringify(this.projects);
    console.log(projectsJSON);

    const projectIndex = this.projects.indexOf(project);
    console.log(projectIndex);
    this.projects[projectIndex] = project; // save project changes onto projects

    localStorage.setItem('projects', projectsJSON);

    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

export default StorageInterface;