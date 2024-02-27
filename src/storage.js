let projects = [];

const StorageInterface = function() {
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectsJSON = JSON.stringify(projects);
    // console.log(projectJSON);

    const projectIndex = projects.indexOf(project);

    if (projectIndex > -1) { // check if project exists in projects
        projects[projectIndex] = project;
    } else { 
        projects.push(project) 
    }


    // console.log(projectIndex);

    localStorage.setItem('projects', projectsJSON);

    console.log(JSON.parse(localStorage.getItem('projects')));
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