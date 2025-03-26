window.onload = function() {
    var gameContainer = document.getElementById('gameContainer');
    if (!gameContainer) {
        console.error("Oyun bulunamadı.!");
        return;
    }

    var steve = document.createElement('div');
    steve.id = 'steve';
    steve.style.position = 'absolute';
    gameContainer.appendChild(steve);


    var steveElement = document.getElementById('steve');
    var stevePosition = { x: 50, y: 0 };
    var speed = 100;
    var gravity = 3.5;
    var jumpPower = 15;
    var isJumping = false;
    var isGameOver = false; 
    var obstacles = [];
    var gameInterval;
    var obstacleSpeed = 6;
    var obstacleIntervals = [];


    var score = 0;
    var scoreElement = document.createElement('div');
    scoreElement.style.position = 'absolute';
    scoreElement.style.top = '10px';
    scoreElement.style.left = '10px';
    scoreElement.style.fontSize = '24px';
    scoreElement.style.color = 'white';
    scoreElement.innerHTML = 'Skor: 0';
    gameContainer.appendChild(scoreElement);

    function updatePosition() {
        steveElement.style.left = stevePosition.x + 'px';
        steveElement.style.bottom = stevePosition.y + 'px';
    }

    function jump() {
        if (!isJumping && !isGameOver) {  
            isJumping = true;
            var jumpHeight = 0;

            var jumpInterval = setInterval(function() {
                stevePosition.y += jumpPower;
                jumpHeight += jumpPower;

                if (jumpHeight >= 100) {
                    clearInterval(jumpInterval);
                    var fallInterval = setInterval(function() {
                        stevePosition.y -= gravity;
                        if (stevePosition.y <= 0) {
                            stevePosition.y = 0;
                            isJumping = false;
                            clearInterval(fallInterval);
                        }
                        updatePosition();
                    }, 20);
                }
                updatePosition();
            }, 20);
        }
    }

    function generateObstacle() {
        var obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.position = 'absolute';
        obstacle.style.left = '800px';
        gameContainer.appendChild(obstacle);

        var obstaclePosition = { x: 800, y: 0 };

        var obstacleInterval = setInterval(function() {
            obstaclePosition.x -= obstacleSpeed;
            obstacle.style.left = obstaclePosition.x + 'px';

            if (obstaclePosition.x <= -30) {
                clearInterval(obstacleInterval);
                obstacle.remove();

                if (!isGameOver) {
                    score++;
                    scoreElement.innerHTML = 'Skor: ' + score;
                }
            }

            if (obstaclePosition.x < stevePosition.x + 32 && obstaclePosition.x + 30 > stevePosition.x && stevePosition.y <= 50) {
                gameOver();
            }
        }, 20);

        obstacleIntervals.push(obstacleInterval);
    }

    function gameOver() {
        isGameOver = true;
        clearInterval(gameInterval);
        obstacleIntervals.forEach(interval => clearInterval(interval));
        obstacleIntervals = [];

        showRestartButton();
    }

    function showRestartButton() {
        var containerDiv = document.createElement('div');
        containerDiv.style.textAlign = 'center';
    
        var restartButton = document.createElement('button');
        restartButton.innerHTML = 'Yeniden Başlat';
        restartButton.style.padding = '10px 20px';
        restartButton.style.fontSize = '18px';
        restartButton.style.marginTop = '20px';
        restartButton.style.cursor = 'pointer';
        restartButton.style.backgroundColor = '#4CAF50';
        restartButton.style.color = 'white';
        restartButton.style.border = 'none';
        restartButton.style.borderRadius = '5px';
    
        containerDiv.appendChild(restartButton);
        gameContainer.appendChild(containerDiv);
    
        restartButton.addEventListener('click', function() {
            location.reload();
        });
    }


    function startGame() {
        gameInterval = setInterval(function() {
            generateObstacle();
        }, 2000);
    }

    window.addEventListener('keydown', function(event) {
        if (event.key === ' ') {
            jump();
        }
    });

    startGame();
};
