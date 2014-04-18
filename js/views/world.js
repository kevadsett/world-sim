define(function(require) {

    var WorldView = function(model){
        this.model = model;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        worldEvents.on('render', this.render, this);
    }

    function drawWorld(model, canvas) {
        var context = canvas.getContext('2d'),
            twoPi = Math.PI * 2,
            halfPi = Math.PI / 2,
            offset = 3 * halfPi,
            height = canvas.height,
            width = canvas.width,
            heightmap = model.heightmap,
            radialPositions = model.radialPositions,
            colour = model.colour;

        var camera = require('js/controllers/camera.js').getInstance();
        context.clearRect(0, 0, width, height);
        context.fillStyle = colour;
        context.strokeStyle = "#000000";
        context.beginPath();

        context.save();
        context.translate(camera.position.x, camera.position.y);
        context.rotate(camera.rotation);
        context.beginPath();
        for(var i = 0; i < heightmap.length; i++) {
            var offset1 = 150 + camera.yOffset -heightmap[i] * camera.zoomFactor / 10,
                offset2 = 150 + camera.yOffset -heightmap[i+1] * camera.zoomFactor / 10;
            var x1 = Math.sin(radialPositions[i]) * offset1,
                y1 = Math.cos(radialPositions[i]) * offset1,
                x2 = Math.sin(radialPositions[i+1]) * offset2,
                y2 = Math.cos(radialPositions[i+1]) * offset2;
            context.lineTo(x1, y1, x2, y2);
        }
        context.fill();
        context.stroke();
        context.closePath();
        context.restore();

    }

    WorldView.prototype = {
        render: function() {
            drawWorld(this.model, this.canvas);
        }
    }

    return WorldView;
})