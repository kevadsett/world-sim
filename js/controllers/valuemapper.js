define(function() {

    ValueMapper = {
        normalise: function(value, low, high) {
            var range = high - low;
            return (value - low) / range;
        },
            
        transform: function(value, inputLow, inputHigh, outputLow, outputHigh) {
            var normal = this.normalise(value, inputLow, inputHigh);
            return normal * (outputHigh - outputLow) + outputLow;
        }
    }

    return ValueMapper;

});