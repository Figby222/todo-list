let projects = [];

const StorageInterface = function() {
};

StorageInterface.prototype.populateStorage = function(project) {
    if (project) {
        const projectIndex = projects.indexOf(project);
        
        if (projectIndex > -1) { // check if project exists in projects
            projects[projectIndex] = project;
        } else { 
            projects.push(project);
        }
    }
    
    const projectsJSON = JSON.stringify(projects);
    localStorage.setItem('projects', projectsJSON);
};

StorageInterface.prototype.getProjects = () => JSON.parse(localStorage.getItem('projects'));

StorageInterface.prototype.removeProject = function(project) {
    projects.splice(projects.indexOf(project), 1);
    this.populateStorage();
}

export default StorageInterface;