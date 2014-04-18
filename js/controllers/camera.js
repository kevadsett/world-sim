define(function(require) {
    var CameraModel = require('js/models/camera');
    var instance;

    var Camera = function(attributes) {
        if(instance === undefined) {
            this.model = new CameraModel(attributes);
            instance = this.model;
        } else {
            throw new Error("Error: Camera is already instansiated.");
        }
    }

    Camera.getInstance = function() {
        if(instance === undefined) {
            throw new Error("Error: Camera has not been instansiated yet.");
        } else {
            return instance;
        }
    }

    return Camera;
})