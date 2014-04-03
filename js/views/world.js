define(function() {
    var WorldView = function(model){
        this.model = model;
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.render();
    }

    WorldView.prototype = {
        render: function() {
            console.log("rendering");
            var heightmap = this.model.heightmap,
                horizontalStep = this.canvas.width / (heightmap.length - 1);
            
            console.log(horizontalStep);
            this.ctx.beginPath();
            for(var i = 0; i < heightmap.length; i++) {
                var x1 = i * horizontalStep,
                    y1 = heightmap[i] * this.canvas.height,
                    x2 = (i+1) * horizontalStep,
                    y2 = heightmap[i+1] * this.canvas.height;
                this.ctx.lineTo(x1, y1, x2, y2);
            }
            this.ctx.stroke();
        }
    }

    return WorldView;
})