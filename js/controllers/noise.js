define(function() {
    function generateRandomArray(length) {
        var array = [];
        console.log("length: " + length);
        for (var i = 0; i < length; i++) {
            array.push(Math.random());
        }
        return array;
    }

    function scaleArray(array, factor) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < factor; j++) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    function averageArrays(arr1, arr2) {
        var result = [];
        if (arr1.length !== arr2.length) throw new Error("Can't average arrays of different lengths.");
        for(var i = 0; i < arr1.length; i++) {
            result.push((arr1[i] + arr2[i]) / 2);
        }
        return result;
    }

    var Noise = {
        perlin1d: function(length, factor) {
            noiseArray = new Array(factor);
            for (var i = 0; i < factor; i++) {
                if(i === 0) {
                    noiseArray[i] = generateRandomArray(length);
                } else {
                    var divider = Math.pow(2, i),
                        newArray = generateRandomArray(length / divider);
                    newArray = scaleArray(newArray, Math.pow(2, i));
                    noiseArray[i] = averageArrays(noiseArray[i-1], newArray);
                }
            }
            console.log(noiseArray);
            return noiseArray[noiseArray.length-1];
        },
        generateRandomArray: generateRandomArray
    }

    return Noise;
})