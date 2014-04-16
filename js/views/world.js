define(function() {
    var WorldView = function(model){
        this.model = model;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.render();
    }

    function drawWorld(model, canvas) {
        var context = canvas.getContext('2d'),
            twoPi = Math.PI * 2,
            halfPi = Math.PI / 2,
            offset = 3 * halfPi,
            height = canvas.height,
            width = canvas.width,
            heightmap = model.heightmap,
            positions = model.positions,
            colour = model.colour;

        context.fillStyle = colour;
        context.strokeStyle = "#000000";
        context.beginPath();
        var radialPositions = [];
        for (var i = 0; i < positions.length; i++) {
            radialPositions.push(twoPi * positions[i]);
        }
        context.beginPath();
        for(var i = 0; i < heightmap.length; i++) {
            var offset1 = 150 + (-heightmap[i]) * 1,
                offset2 = 150 + (-heightmap[i+1]) * 1;
            var x1 = width/2 + Math.sin(radialPositions[i]) * offset1,
                y1 = height /2 + Math.cos(radialPositions[i]) * offset1,
                x2 = width/2 + Math.sin(radialPositions[i+1]) * offset2,
                y2 = height/2 + Math.cos(radialPositions[i+1]) * offset2;
            context.lineTo(x1, y1, x2, y2);
        }
        context.fill();
        context.stroke();
        context.closePath();

    }

    WorldView.prototype = {
        render: function() {
            drawWorld(this.model, this.canvas);
        }
    }

    return WorldView;
})