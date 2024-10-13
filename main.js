var canvas = document.querySelector("canvas");
canvas.height = document.getElementById("smalltab").offsetHeight;
canvas.width = document.getElementById("smalltab").offsetWidth;
canvas.style.background = "black";

var c = canvas.getContext("2d");
const snake = new Snake(c, canvas.width, canvas.height);
function animate() {
  c.clearRect(0, 0, innerWidth, innerHeight);
  snake.run();
}
setInterval(() => {
  animate();
}, 100);
document.getElementById("bodyId").addEventListener("keyup", function (event) {
  let e = event.code;
  if (e == "ArrowDown") {
    console.log("niche");
    snake.setRunningState("down");
  } else if (e == "ArrowUp") {
    snake.setRunningState("up");
  } else if (e == "ArrowLeft") {
    snake.setRunningState("left");
  } else if (e == "ArrowRight") {
    snake.setRunningState("right");
  }
});
