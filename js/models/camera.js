define(function(require) {
    var Camera = function(attributes) {
        this.position = attributes.position || {x: attributes.width/2, y: attributes.height/2};
        if(this.position === undefined) throw new Error('Error: no camera position attributes defined');
        this.height = attributes.height || this.position.y * 2;
        this.width = attributes.width || this.position.x * 2;
        this.rawZoom = 0;
        this.zoomFactor = attributes.zoomFactor || 0;
        this.rotation = attributes.rotation || 0;
        this.yOffset = (this.zoomFactor * 150 / 20)

        console.log("New camera instantiated. position: [" + this.position.x + ", " + this.position.y + "], zoomFactor: " + this.zoomFactor + ", rotation: " + 360 * (this.rotation / Math.PI * 2));
    }

    return Camera;
})