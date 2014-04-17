define(function(require) {
    var instance;

    var Camera = function(width, height, attributes) {
        if(instance === undefined) {
            this.position = attributes.position || {x: width/2, y: height/2};
            this.zoomFactor = attributes.zoomFactor || 0;
            this.rotation = attributes.rotation || 0;
            instance = this;
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