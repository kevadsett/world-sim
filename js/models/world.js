define(["js/controllers/noise.js"], function(Noise) {
    var WorldModel = function(length){
        this.length = length;
        this.init();
    }

    WorldModel.prototype = {
        init: function() {
            console.log("World model initialised");
            this.heightmap = Noise.perlin1d(this.length, 6);
            
        }
    }

    return WorldModel;
})