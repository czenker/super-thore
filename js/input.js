(function() {
    var pressedKeys = {};

    function setKey(event, status) {
        var code = event.keyCode;
        var key;

        switch(code) {
        case 37:
            key = 'LEFT'; break;
        case 38:
            key = 'UP'; break;
        case 39:
            key = 'RIGHT'; break;
        case 40:
            key = 'DOWN'; break;
        case 32:
            key = 'JUMP'; break;
        case 88:
            key = 'RUN'; break;
        case 90:
            key = 'RUN'; break;
        default:
            key = String.fromCharCode(code);
        }

        pressedKeys[key] = status;
    }

    document.addEventListener('keydown', function(e) {
        setKey(e, true);
    });

    document.addEventListener('keyup', function(e) {
        setKey(e, false);
    });

    window.addEventListener('blur', function() {
        pressedKeys = {};
    });

    ["left", "right", "up", "down", "run", "jump"].forEach((button) => {
        const command=button.toUpperCase();
        document.getElementById(button).addEventListener("mousedown", (event) => {
            pressedKeys[command] = true;
            event.preventDefault();
        });
        document.getElementById(button).addEventListener("mouseup", (event) => {
            pressedKeys[command] = false;
            event.preventDefault();
        });
        document.getElementById(button).addEventListener("touchstart", (event) => {
            pressedKeys[command] = true;
            event.preventDefault();
        });
        document.getElementById(button).addEventListener("touchend", (event) => {
            pressedKeys[command] = false;
            event.preventDefault();
        });
    })

    window.input = {
        isDown: function(key) {
            return pressedKeys[key.toUpperCase()];
        },
        reset: function() {
          pressedKeys['RUN'] = false;
          pressedKeys['LEFT'] = false;
          pressedKeys['RIGHT'] = false;
          pressedKeys['DOWN'] = false;
          pressedKeys['JUMP'] = false;
          pressedKeys['RUN'] = false;
        }
    };
})();
