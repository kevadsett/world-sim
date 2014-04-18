define(function(require) {
    var ValueMapper = require('js/controllers/valuemapper');
    
    function generateRandomArray(frequency, amplitude, postiveOnly) {
        var array = [];
        for (var i = 0; i < frequency; i++) {
            var newValue = postiveOnly ? Math.random() * amplitude : ((Math.random() * 2) - 1) * amplitude;
            array.push(newValue);
        }
        return array;
    }

    function scaleArray(array, factor) {
        var newArray = array.length > 1 ? [] : array;
        for (var i = 0; i < array.length; i++) {
            var a = array[i],
                b = array[i+1];
            for (var j = 0; j < factor; j++) {
                var newValue;
                if(b) {
                    newValue = lerp(a, b, j/factor);
                } else {
                    newValue = a;
                }
                newArray.push(newValue);
            }
        }
        return newArray;
    }

    function lerp(a, b, x) {
        return a * (1-x) + b*x;
    }

    function averageArrays(arrays) {
        var averageArray = sumArrays(arrays);
        for (var i = 0; i < averageArray.length; i++) {
            averageArray[i] /= arrays.length;
        }
        return averageArray;
    }

    function sumArrays(arrays) {
        var sumArray = [];
        for (var i = 0; i < arrays[0].length; i++) {
            sumArray.push(0);
        }
        for (var i = 0; i < arrays.length; i++) {
            for (var j = 0; j < arrays[i].length; j++) {
                sumArray[j] += arrays[i][j];
            }
        }
        return sumArray;
    }

    console.log(ValueMapper);

    var Noise = {
        perlin1d: function(length) {
            noiseArray = [];
            var i = 0,
                frequency = length / Math.pow(2, i);
            while (frequency > 1) {
                var amplitude = 1/(frequency/4);
                noiseArray.push(generateRandomArray(frequency, amplitude));
                noiseArray[i] = scaleArray(noiseArray[i], Math.pow(2, i))
                frequency = length / Math.pow(2, ++i);
            }
            return [sumArrays(noiseArray), noiseArray];
                
        },
        generateRandomSortedArray: function(length) {
            var array = generateRandomArray(length, 1, true);
            return array.sort();
        },
        generateWeightedRandomArray: function(length) {
            var array = this.perlin1d(length)[0];
            for (var i = 0; i < length; i++) {
                var halfwayPoint = (length - 1)/2;
                var distToMiddle = Math.abs(halfwayPoint - i);
                array[i] = array[i] * ValueMapper.transform(distToMiddle, 0, halfwayPoint, 1, 0);
            }
            return array;
        },

        generateTerrainArrays: function(segmentCount) {
            var segments = new Array(segmentCount);
            var numberOfPositions = 0;
            for(var i = 0; i < segments.length; i++) {
                var segmentLength = Math.pow(2, Math.ceil(3 + Math.random() * 9));
                segments[i] = this.generateWeightedRandomArray(segmentLength);
                numberOfPositions+= segments[i].length;
            }
            // flatten segments array
            var terrain = [].concat.apply([], segments);

            return terrain;
        }
    }

    return Noise;
})