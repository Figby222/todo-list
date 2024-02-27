let projects = [];

const StorageInterface = function() {
};

StorageInterface.prototype.populateStorage = function(project) {
    // console.log(projectJSON);
    
    if (project) {
        const projectIndex = projects.indexOf(project);
        
        if (projectIndex > -1) { // check if project exists in projects
            projects[projectIndex] = project;
        } else if (project.defaultProject) {
            projects.unshift(project);
        } else { 
            projects.push(project);
        }
    }
    
    
    // console.log(projectIndex);
    
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', projectsJSON);

    // console.log(JSON.parse(localStorage.getItem('projects')));
    // might have to modify since project.title is always changing
};

StorageInterface.prototype.getProjects = () => JSON.parse(localStorage.getItem('projects'));

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

StorageInterface.prototype.removeProject = function(project) {
    projects.splice(projects.indexOf(project), 1);
    // localStorage.removeItem(project.title);
    this.populateStorage();
}

export default StorageInterface;