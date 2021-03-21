window.animModule = (function() {

    window.onload = init;

    var canvas;
    var context;

    var ballRadius = 10;
    var ballColor = "blue";
    var ballPosition;

    // displacement of ball for each step
    var dx = 5;
    var dy = 0;

    function init() {

        canvas = document.getElementById('testCanvas');
        context = canvas.getContext('2d');

        // width = canvas.width;
        // height = canvas.height;

        // current ball position
        ballPosition = {x : ballRadius, y : ballRadius + 5};

    }

    function setSpeed(speed) {

        let newSpeed = +speed;
        if (dx > 0)
            dx = newSpeed
        else
            dx =  -newSpeed;
    }


    // draw current position on the canvas
    function drawBallOnCanvas() {

        // Fill in the rest of the code
        function isEvenBound(bound) {
            if (bound % 2 == 0)
                return true;
            else
                return false;
        }

        function drawLines(){
            context.fillStyle = '#D3C0C0';
            context.fillRect(0, 0, canvas.width, canvas.height);

            var rightBound = canvas.width;
            var leftBound = 0;
            var ballThatFits = ballRadius + 10

            for (var i = 0; i < canvas.height + canvas.width; i += 25){
                if (!isEvenBound(i)){
                    context.beginPath()
                    context.moveTo(leftBound, i );
                    context.lineTo(rightBound - ballThatFits, i);
                    context.stroke()

                } else {
                    context.beginPath()
                    context.moveTo(leftBound + ballThatFits, i );
                    context.lineTo(rightBound , i );
                    context.stroke()
                }

            }
        }

        function toggleColor() {
            if (ballColor === 'red') {
                ballColor = 'blue'
            } else if (ballColor === 'blue') {
                ballColor = 'red'
            }
            return ballColor;
          }


        function checkIfBallOnEdge() {
            if (ballPosition.x + ballRadius > canvas.width ||
                ballPosition.x - ballRadius < 0) {
                console.log("1==>Before calling update Y x:y", ballPosition.x, ballPosition.y)
                dx=-dx;
                console.log("This is dx", dx)
                updateYpositionAndToggleColor()
                console.log("3==>after updated Y x:y", ballPosition.x, ballPosition.y)

            } else if (ballPosition.y + ballRadius > canvas.height ||
                ballPosition.y - ballRadius < 0){
                ballPosition.y = dy - 15
                updateYpositionAndToggleColor()
                console.log("4 ==>after updated Y, x:y", ballPosition.x, ballPosition.y)
            }
            ballPosition.x += dx
            ballPosition.y += dy
        }

        function updateYpositionAndToggleColor () {
            ballPosition.y += dy + 25
            ballColor = toggleColor();
            console.log("2==>updating Y position, new x:y", ballPosition.x, ballPosition.y)
        }

        (function () {

            drawLines();
            // context.restore()
            context.beginPath();
            context.arc(ballPosition.x , ballPosition.y, ballRadius, 0, Math.PI * 2);
            context.closePath();
            context.fillStyle = ballColor
            context.fill();
            context.save()

            checkIfBallOnEdge()
        })()

    }
    // browser specific animation request
     window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  window.oRequestAnimationFrame      ||
                  window.msRequestAnimationFrame     ||
                  // fall back to JavaScript setTimeout
                  function(callback, element){
                    window.setTimeout(callback, 1000 / 60);
                  };
        })();

        // Define the Animation
        function doAnimation() {
            // Draw a single frame of animation on our canvas
            drawBallOnCanvas();

            // After this frame is drawn, let the browser schedule the next one

            window.requestAnimFrame(doAnimation);
        }

        // Start the Animation

         window.requestAnimFrame(doAnimation);

         return {
            setSpeed: setSpeed
         }


})();












