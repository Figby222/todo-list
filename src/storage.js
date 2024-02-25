const StorageInterface = function() {
    
};

StorageInterface.prototype.populateStorage = function(project) {
    const projectJSON = JSON.stringify(project);
    console.log(projectJSON);
};

StorageInterface.prototype.getObject = function(objectJSON) {
    return JSON.parse(objectJSON);
};

export default StorageInterface;