define(function(require) {
    var Camera = function(attributes) {
        this.position = attributes.position || {x: attributes.width/2, y: attributes.height/2};
        if(this.position === undefined) throw new Error('Error: no camera position attributes defined');
        this.zoomFactor = attributes.zoomFactor || 0;
        this.rotation = attributes.rotation || 0;

        console.log("New camera instantiated. position: [" + this.position.x + ", " + this.position.y + "], zoomFactor: " + this.zoomFactor + ", rotation: " + 360 * (this.rotation / Math.PI * 2));
    }

    return Camera;
})