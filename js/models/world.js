define(["js/controllers/noise.js"], function(Noise) {
    var WorldModel = function(length){
        this.length = length;
        this.init();
    }

    WorldModel.prototype = {
        init: function() {
            console.log("World model initialised");
            var segmentCount = Math.ceil(Math.random()*25 + 25);
            this.heightmap = Noise.generateTerrainArrays(segmentCount);
            this.positions = Noise.generateRandomSortedArray(this.heightmap.length - 2);
            this.positions.splice(0, 0, 0);
            this.positions.push(1);
            this.colour = "#" + (Math.floor(Math.random() * 16777215)).toString(16);
        }
    }

    return WorldModel;
})