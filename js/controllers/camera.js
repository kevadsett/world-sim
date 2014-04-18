define(function(require) {
    var CameraModel = require('js/models/camera');
    var instance;

    var Camera = function(attributes) {
        if(instance === undefined) {
            this.model = new CameraModel(attributes);
            this.setupListeners();
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

    Camera.prototype = {
        setupListeners: function() {
            worldEvents.on('zoom', this.onZoom, this);
        },

        onZoom: function(zoomIn) {
            if(zoomIn) {
                if(instance.rawZoom < 180) instance.rawZoom++;
            } else {
                if(instance.rawZoom > 0) instance.rawZoom--;
            }
            instance.zoomFactor = Math.exp(instance.rawZoom/20);
            instance.yOffset = (instance.zoomFactor * 150 / 20)
            instance.position.y = instance.height/2 + instance.yOffset;

            this.debugCameraChange();
        },

        debugCameraChange: function() {
            console.log("Camera change detected. position: [" + instance.position.x + ", " + instance.position.y + "], rawZoom: " + instance.rawZoom + ", rotation: " + 360 * (instance.rotation / Math.PI * 2));
        }
    }

    return Camera;
})