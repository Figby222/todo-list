let projects = [];

const StorageInterface = function() {
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectJSON = JSON.stringify(project);
    console.log(projectJSON);

    const projectIndex = projects.indexOf(project);
    console.log(projectIndex);
    projects[projectIndex] = project;

    localStorage.setItem(project.title, projectJSON);

    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getProjects = () => projects;

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

StorageInterface.prototype.addProject = function(project) {
    // add project to a let projects so that projects is basically static
    projects.push(project);
}

StorageInterface.prototype.removeProject = function(project) {
    projects.splice(projects.indexOf(project), 1);
    localStorage.removeItem(project.title);
}

export default StorageInterface;