define(function(require) {
    var UserInputController = function() {
        this.listenToEvents();
    }

    function onCanvasClicked(event) {
        var x, y;
        var $target = $(event.target);

        if (event.pageX || event.pageY) { 
            x = event.pageX;
            y = event.pageY;
        }
        else { 
            x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
            y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
        } 
        x -= Math.round($target.offset().left);
        y -= Math.round($target.offset().top);
        console.log(x, y);
    }

    UserInputController.prototype = {
        listenToEvents: function() {
            $('#game-canvas').on('click', onCanvasClicked);
        }
    }

    return UserInputController;
});