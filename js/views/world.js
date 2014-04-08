define(function() {
    var WorldView = function(model){
        this.model = model;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.render();
    }

    function drawPath(heightmap, positions, colour, canvas) {
        var context = canvas.getContext('2d');
        context.strokeStyle = context.fillStyle = colour;
        context.beginPath();
        var height = canvas.height,
            width = canvas.width;
        for(var i = 0; i < heightmap.length; i++) {
            var x1 = positions[i] * width,
                y1 = height / 2 + heightmap[i] * 100,
                x2 = positions[i+1] * width,
                y2 = height / 2 + heightmap[i+1] * 100;
            context.lineTo(x1, y1, x2, y2);
            context.stroke();
            // context.fillRect(x1-2, y1-2, 4, 4);
        }
    }

    function drawGrid(length, canvas) {
        var context = canvas.getContext('2d');
        context.strokeStyle = context.fillStyle = "#000000";
        context.beginPath();
        var height = canvas.height,
            width = canvas.width;
        var horizontalStep = width / (length - 1);

        context.beginPath();
        for(var i = 0; i < length; i++) {
            var x = i * horizontalStep;
            context.moveTo(x, 0);
            context.lineTo(x, height);
            context.stroke();
        }
    }

    WorldView.prototype = {
        render: function() {
            console.log("rendering");
            drawPath(this.model.heightmap, this.model.positions, "#000000", this.canvas);
            /*this.ctx.moveTo(0, this.canvas.height / 2);
            this.ctx.lineTo(this.canvas.width, this.canvas.height / 2);
            this.ctx.stroke();*/
        }
    }

    return WorldView;
})