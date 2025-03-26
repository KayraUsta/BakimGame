<template>
    <div id="container">
      <section class="error content background-wrap cloud-blue">
        <div class="fit-wide">
          <div style="text-align: center;">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 20 20"
            >
              <path
                fill="#fff"
                d="M3.135 6.89c.933-.725 1.707-.225 2.74.971c.116.135.272-.023.361-.1S7.687 6.456 7.754 6.4c.066-.059.146-.169.041-.292a36 36 0 0 1-.743-.951c-1.808-2.365 4.946-3.969 3.909-3.994c-.528-.014-2.646-.039-2.963-.004c-1.283.135-2.894 1.334-3.705 1.893c-1.061.726-1.457 1.152-1.522 1.211c-.3.262-.048.867-.592 1.344c-.575.503-.934.122-1.267.414c-.165.146-.627.492-.759.607c-.133.117-.157.314-.021.471c0 0 1.264 1.396 1.37 1.52c.105.122.391.228.567.071c.177-.156.632-.553.708-.623c.078-.066-.05-.861.358-1.177m5.708.517c-.12-.139-.269-.143-.397-.029L7.012 8.63a.29.29 0 0 0-.027.4l8.294 9.439c.194.223.53.246.751.053l.97-.813a.54.54 0 0 0 .052-.758zM19.902 3.39c-.074-.494-.33-.391-.463-.182c-.133.211-.721 1.102-.963 1.506c-.24.4-.832 1.191-1.934.41c-1.148-.811-.749-1.377-.549-1.758c.201-.383.818-1.457.907-1.59c.089-.135-.015-.527-.371-.363c-.357.164-2.523 1.025-2.823 2.26c-.307 1.256.257 2.379-.85 3.494l-1.343 1.4l1.349 1.566l1.654-1.57c.394-.396 1.236-.781 1.998-.607c1.633.369 2.524-.244 3.061-1.258c.482-.906.402-2.814.327-3.308M2.739 17.053a.54.54 0 0 0 0 .758l.951.93c.208.209.538.121.746-.088l4.907-4.824l-1.503-1.714z"
              />
            </svg>
          </div>
  
          <h1 class="title title--regular title--size-large title--weight-bold">
            Yapım Aşamasında
          </h1>
          <p class="title title--subtitle title--size-semimedium title--weight-normal">
            Yenilikler İçin biraz beklemeniz gerekiyor. Beklemekten sıkıldıysanız size özel
            oyunumuzu deneyiniz.
          </p>
  
          <div class="game-container" ref="gameContainer">
            <div id="score" :style="scoreStyle">Skor: {{ score }}</div>
            <div id="steve" :style="steveStyle"></div>
            <div
              v-for="(obstacle, index) in obstacles"
              :key="index"
              class="obstacle"
              :style="obstacle.style"
            ></div>
            <div v-if="isGameOver" class="restart-container">
              <button @click="restartGame" class="restart-button">Yeniden Başlat</button>
            </div>
          </div>
        </div>
  
        <div class="error--shape__clouds">
          <svg
            id="f95fc14d-9eb7-4d11-bcb9-651fb6dd69f0"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2074.144 292.377"
          >
            <title>clouds_shape</title>
            <path
              d="M2034.093,187.309a40.338,40.338,0,0,0-6.537.579,57.445,57.445,0,0,0-101.344-53.826,39.917,39.917,0,0,0-53.631-9.69,57.478,57.478,0,0,0-76.107-65.161c.019-.589.045-1.175.045-1.767a57.443,57.443,0,1,0-114.885,0,58.165,58.165,0,0,0,.412,6.781,39.929,39.929,0,0,0-62.076,39.726,57.431,57.431,0,0,0-89.212,45.7,57.427,57.427,0,0,0-52.738,8.725,39.97,39.97,0,0,0-68.167-16.906c.043-.757.114-1.507.114-2.276a40.049,40.049,0,0,0-65.428-30.986,57.445,57.445,0,0,0-113.6,12.12c0,1.258.055,2.5.134,3.739a39.956,39.956,0,0,0-36.784,6.689,40.715,40.715,0,0,0,.212-4.139A40.019,40.019,0,0,0,1132.73,93a57.443,57.443,0,0,0-106.758-39.516,40.05,40.05,0,0,0-79.081,4.36,40.116,40.116,0,0,0-38.16.022c0-.139.011-.277.011-.417a57.443,57.443,0,1,0-114.474,6.781,39.929,39.929,0,0,0-62.076,39.726,57.431,57.431,0,0,0-89.212,45.7,57.427,57.427,0,0,0-52.738,8.725,39.97,39.97,0,0,0-68.167-16.906c.043-.757.114-1.507.114-2.276a40.049,40.049,0,0,0-65.428-30.986,57.445,57.445,0,0,0-113.6,12.12c0,1.258.055,2.5.134,3.739a39.956,39.956,0,0,0-36.784,6.689,40.715,40.715,0,0,0,.212-4.139A40.019,40.019,0,0,0,244.952,93,57.443,57.443,0,0,0,138.194,53.479a40.05,40.05,0,0,0-79.081,4.36A40.066,40.066,0,0,0,0,93.074v199.3H2074.144V227.363A40.052,40.052,0,0,0,2034.093,187.309Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "GameComponent",
    data() {
      return {
        stevePosition: { x: 50, y: 0 },
        velocityY: 0, // Zıplama ve düşüş hızı
        gravity: 0.5,
        jumpPower: 12,
        isJumping: false,
        isGameOver: false,
        obstacles: [],
        obstacleSpeed: 4,
        score: 0,
        lastFrame: null,
        obstacleInterval: null,
      };
    },
    computed: {
      steveStyle() {
        return {
          position: "absolute",
          width: "32px",
          height: "48px",
          backgroundColor: "#0f5cff",
          left: `${this.stevePosition.x}px`, // X ekseni için left
          bottom: `${this.stevePosition.y}px`, // Y ekseni için bottom
          transition: "bottom 0.016s linear", // Sadece Y ekseni için geçiş
        };
      },
      scoreStyle() {
        return {
          position: "absolute",
          top: "10px",
          left: "10px",
          fontSize: "24px",
          color: "white",
        };
      },
    },
    mounted() {
      this.startGame();
      window.addEventListener("keydown", this.handleKeydown);
    },
    beforeDestroy() {
      this.stopGame();
      window.removeEventListener("keydown", this.handleKeydown);
    },
    methods: {
      gameLoop(timestamp) {
        if (!this.lastFrame) this.lastFrame = timestamp;
        const delta = (timestamp - this.lastFrame) / 16; // 60 FPS için normalize
  
        if (delta >= 1) {
          this.updateGame(delta);
          this.lastFrame = timestamp;
        }
  
        if (!this.isGameOver) {
          requestAnimationFrame(this.gameLoop);
        }
      },
      updateGame(delta) {
        // Zıplama ve yerçekimi
        if (this.isJumping || this.stevePosition.y > 0) {
          this.velocityY -= this.gravity * delta;
          this.stevePosition.y += this.velocityY * delta;
          
          if (this.stevePosition.y <= 0) {
            this.stevePosition.y = 0;
            this.velocityY = 0;
            this.isJumping = false;
          }
        }
  
        // Engelleri güncelle
        this.obstacles = this.obstacles
          .map((obstacle) => {
            obstacle.position.x -= this.obstacleSpeed * delta;
            obstacle.style.left = `${obstacle.position.x}px`;
            return obstacle;
          })
          .filter((obstacle) => {
            if (obstacle.position.x <= -20) {
              if (!this.isGameOver) this.score++;
              return false;
            }
            return true;
          });
  
        // Çarpışmayı kontrol et
        this.checkCollisions();
      },
      jump() {
        if (!this.isJumping && !this.isGameOver && this.stevePosition.y === 0) {
          this.isJumping = true;
          this.velocityY = this.jumpPower;
        }
      },
      generateObstacle() {
        const obstacle = {
          position: { x: 800, y: 0 },
          style: {
            position: "absolute",
            width: "20px",
            height: "48px",
            backgroundColor: "red",
            bottom: "0px",
            left: "800px",
            transition: "left 0.016s linear",
          },
        };
        this.obstacles.push(obstacle);
      },
      checkCollisions() {
        this.obstacles.forEach((obstacle) => {
          if (
            obstacle.position.x < this.stevePosition.x + 32 &&
            obstacle.position.x + 20 > this.stevePosition.x &&
            this.stevePosition.y < 48
          ) {
            this.gameOver();
          }
        });
      },
      gameOver() {
        this.isGameOver = true;
        this.stopGame();
      },
      restartGame() {
        this.stevePosition = { x: 50, y: 0 };
        this.velocityY = 0;
        this.isJumping = false;
        this.isGameOver = false;
        this.obstacles = [];
        this.score = 0;
        this.lastFrame = null;
        this.startGame();
      },
      startGame() {
        this.obstacleInterval = setInterval(() => {
          this.generateObstacle();
        }, 2000);
        requestAnimationFrame(this.gameLoop);
      },
      stopGame() {
        if (this.obstacleInterval) clearInterval(this.obstacleInterval);
        this.obstacleInterval = null;
      },
      handleKeydown(event) {
        if (event.key === " ") {
          this.jump();
        }
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    -webkit-text-size-adjust: 100%;
  }
  
  .fit-wide {
    position: relative;
    overflow: hidden;
    max-width: 1240px;
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
  
  .background-wrap {
    position: relative;
  }
  .background-wrap.cloud-blue {
    background-color: #3586c9;
  }
  .background-wrap.white {
    background-color: #fff;
  }
  
  .title {
    position: relative;
    text-align: center;
    margin: 20px auto 10px;
  }
  
  .title--regular {
    font-family: "Roboto", Arial, sans-serif;
  }
  .title--size-large {
    font-size: 36px;
    line-height: 46px;
  }
  .title--size-semimedium {
    font-size: 20px;
    line-height: 28px;
  }
  .title--weight-normal {
    font-weight: 400;
  }
  .title--weight-bold {
    font-weight: 700;
  }
  .title--subtitle {
    padding-bottom: 40px;
    font-family: "Open Sans", Arial, sans-serif;
    text-align: center;
  }
  
  .error h1,
  .error p {
    color: #ffffff;
  }
  
  .error--shape__clouds svg {
    display: block;
  }
  
  .game-container {
    width: 90%;
    height: 300px;
    position: relative;
    background-color: #0d2029;
    overflow: hidden;
    border-radius: 15px;
    margin: auto;
  }
  
  .restart-container {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .restart-button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  @media screen and (max-width: 767px) {
    .error--bg__cover {
      display: none;
    }
  }
  </style>