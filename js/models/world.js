define(["js/controllers/noise.js"], function(Noise) {
    var WorldModel = function(length){
        this.length = length;
        this.init();
    }

    WorldModel.prototype = {
        init: function() {
            console.log("World model initialised");
            var perlin = Noise.perlin1d(this.length);
            this.positions = Noise.generateRandomSortedArray(this.length - 2);
            this.positions.splice(0, 0, 0);
            this.positions.push(1);
            this.heightmap = perlin[0];
            this.debugMap = perlin[1];
        }
    }

    return WorldModel;
})