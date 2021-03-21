var bullsEyeModule = (function() {

    window.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;

    var delay = false;

    // Interval
    var timerId;

    function init() {

            canvas = document.getElementById("testCanvas");
            context = canvas.getContext("2d");
            delay = document.getElementById("delay").checked;
            centerX = canvas.width / 2;
            centerY = canvas.height / 2;

            drawPattern();


    }
// called whenever the slider value changes or the delay checkbox is clicked
    function drawPattern(){

        if (timerId) {
            clearInterval(timerId);
            timerId = undefined;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);

        var bandWidth = document.getElementById("band").value;
        document.getElementById("widthDisplay").value = bandWidth;
        delay = document.getElementById("delay").checked;


            if (canvas.getContext ) {
                canvas.getContext('2d');
                var n = 2
                var r = 200;
                var sAngle = 0
                var eAngle = Math.PI * n
                var color = 'red';


                function drawOne() {
                    context.save();
                    context.beginPath();
                    context.arc(centerX , centerY, r , sAngle , eAngle, true)
                    console.log("this is Radius" , r )
                    context.fillStyle = color
                    context.strokeStyle = color
                    context.fill()
                    context.stroke();
                    context.restore();
                    r = r - bandWidth
                    color = toggleColor();
                }
                function toggleColor() {
                    if (color === 'red') {
                        color = 'blue'
                    } else if (color === 'blue') {
                        color = 'red'
                    }
                    return color;
                  }

                function drawOnInterval() {
                    if (delay) {
                        console.log('delay ===> ', delay)
                        timerId = setInterval(() => {
                            if (r <= 0) {
                                clearInterval(timerId);
                                return;
                            }
                            drawOne();
                        }, 1500)
                        console.log(timerId);
                    }
                    else {
                        while (r > 0) {
                            drawOne()
                        }

                    }
                }
                drawOnInterval()
            }
    }

    return {

        drawPattern: drawPattern
    };

})();






