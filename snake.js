class Snake {
  c;
  width = 30;
  height = 30;
  length = 3;
  frameWidth;
  frameHeight;
  isEmemyThere = false;
  xt = 35;
  yt = 35;
  point = 0;
  /** @type {'up' | 'down' | 'right' | 'left'} */
  runningState = "right";
  space = 5;
  /**
   * @type {{xpx:number, ypx:number}[]}
   */
  state = [];

  constructor(canvas, frameWidth, frameHeight) {
    this.image = new Image();
    this.image.src = "circle.png";
    this.c = canvas;
    this.state = new Array(3).fill().map((_, index) => ({
      xpx: (this.width + this.space) * index + this.space - 5 + 35,
      ypx: 0,
    }));
    this.frameHeight = frameHeight;
    this.frameWidth = frameWidth;
  }

  /**
   * @param {'up' | 'down' | 'right' | 'left'} state
   */
  setRunningState(state) {
    this.runningState = state;
  }

  increaseLength() {
    const pushItem = { ...this.state[this.state.length - 1] };
    switch (this.runningState) {
      case "right":
        pushItem.xpx += this.width + this.space;
        break;
      case "down":
        pushItem.ypx += this.height + this.space;
        break;
      case "left":
        pushItem.xpx -= this.width + this.space;
        break;
      case "up":
        pushItem.ypx -= this.height + this.space;
      default:
        break;
    }
    this.state.push(pushItem);
  }

  putEnemy() {
    if (!this.isEmemyThere) {
      this.isEmemyThere = true;
      const randomX = Math.floor(
        Math.random(this.frameWidth) * this.frameWidth
      );
      const randomY = Math.floor(
        Math.random(this.frameHeight) * this.frameHeight
      );
      this.xt = randomX - (randomX % 35);
      this.yt = randomY - (randomY % 35);
    
    }
    this.c.fillStyle = "yellow";
    this.c.fillRect(this.xt, this.yt, 30, 30);
  }

  eatEnemy() {
    const x = this.state[this.state.length - 1].xpx;
    const y = this.state[this.state.length - 1].ypx;
    
const targetX = this.state[0].xpx;
const targetY = this.state[0].ypx;
for(let i = 1 ; i<this.state.length;i++)
{
  if(Math.abs(this.state[i].xpx - targetX) <= 20 && Math.abs(this.state[i].ypx - targetY) <= 20)
  {
    alert('game over');
    exists = true;
  }
}
      if (Math.abs(this.xt - x) <= 20 && Math.abs(this.yt - y) <= 20) {
      this.isEmemyThere = false;
      const pushElement = { ...this.state[this.state.length - 1] };
      switch (this.runningState) {
        case "right":
          pushElement.xpx += this.width + this.space;
          break;
        case "down":
          pushElement.ypx += this.height + this.space;
          break;
        case "left":
          pushElement.xpx -= this.width + this.space;
          break;
        case "up":
          pushElement.ypx -= this.height + this.space;
        default:
          break;
      }
    
      this.point++;
      document.getElementById("points").innerHTML = "" + this.point;
      this.state.push(pushElement);
    }
  }

  run() {
    for (let i = 0; i < this.state.length - 1; i++) {
      this.state[i].xpx = this.state[i + 1].xpx;
      this.state[i].ypx = this.state[i + 1].ypx;
    }
    switch (this.runningState) {
      case "right":
        this.state[this.state.length - 1].xpx += this.width + this.space;
        break;
      case "down":
        this.state[this.state.length - 1].ypx += this.height + this.space;
        break;
      case "left":
        this.state[this.state.length - 1].xpx -= this.width + this.space;
        break;
      case "up":
        this.state[this.state.length - 1].ypx -= this.height + this.space;
      default:
        break;
    }
    if (this.state[this.state.length - 1].xpx >= this.frameWidth) {
      alert('game over');
      this.state[this.state.length - 1].xpx = 0;
    }
    if (this.state[this.state.length - 1].ypx >= this.frameHeight) {
      alert('game over');
      this.state[this.state.length - 1].ypx = 0;
    }
    if (this.state[this.state.length - 1].xpx < 0) {
      alert('game over');
      this.state[this.state.length - 1].xpx = this.frameWidth;
    }
    if (this.state[this.state.length - 1].ypx < 0) {
      alert('game over');
      this.state[this.state.length - 1].ypx = this.frameHeight;
    }
    this.state.forEach((data) => {
      this.c.fillStyle = "black";
      this.c.drawImage(this.image, data.xpx, data.ypx, this.width, this.height);
    });
    this.putEnemy();
    this.eatEnemy();
  }
}
