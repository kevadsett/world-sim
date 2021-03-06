define(function(require) {
    var Noise = require('js/controllers/noise');
    
    var WorldModel = function(){
        this.init();
    }

    WorldModel.prototype = {
        init: function() {
            console.log("World model initialised");
            var segmentCount = Math.ceil(Math.random()*50 + 50);
            this.heightmap = Noise.generateTerrainArrays(segmentCount);
            this.positions = Noise.generateRandomSortedArray(this.heightmap.length - 2);
            this.positions.splice(0, 0, 0);
            this.positions.push(1);
            this.radialPositions = [];
            for (var i = 0; i < this.positions.length; i++) {
                // hack for reversed positions...
                this.radialPositions.push(Math.PI * 2 * this.positions[this.positions.length-1-i]);
            }
            this.colour = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
        }
    }

    return WorldModel;
})