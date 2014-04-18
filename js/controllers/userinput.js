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
        worldEvents.emit('canvasClicked', {x:x, y:y});
    }

    function onKeyDown(event) {
        switch(event.which) {
            case 40:
            case 109:
            case 189:
                worldEvents.emit('zoom', false);
                break;
            case 38:
            case 107:
            case 187:
                worldEvents.emit('zoom', true);
                break;
        }
    }

    UserInputController.prototype = {
        listenToEvents: function() {
            $('#game-canvas').on('click', onCanvasClicked);
            $(document).on('keydown', onKeyDown);
        }
    }

    return UserInputController;
});