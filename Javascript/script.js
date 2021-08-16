// Color Picker logic----------------------------------
let previousColor = document.getElementsByClassName("color_outline")[0];
let color;
function selectColor(event) {
  color = event.target.style.backgroundColor;
  event.target.parentElement.style.border = "2px solid black";
  previousColor.style.border = "2px solid transparent";
  previousColor = event.target.parentElement;
}

// Drawing Logic--------------------------------------
let canvasContainer = document.querySelector(".drawing_container");
let canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
totalWidth = canvasContainer.clientWidth;
totalHeight = canvasContainer.clientHeight;
canvas.setAttribute("width", `${totalWidth}`);
canvas.setAttribute("height", `${totalHeight}`);
function windowResize() {
  let totalWidth = canvasContainer.clientWidth;
  let totalHeight = canvasContainer.clientHeight;
  canvas.setAttribute("width", `${totalWidth}`);
  canvas.setAttribute("height", `${totalHeight}`);
}
let getXPosition;
let getYPosition;
let drawing = false;
document.body.addEventListener("resize", () => {
  console.log("change");
});

let size = 5;
const drawLine = (context, x1, y1, x2, y2) => {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = size;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  //   context.arc(x1, y1, size, 0, 2 * Math.PI);
  //   context.fill();
};
canvas.addEventListener("mousedown", (e) => {
  getXPosition = e.offsetX;
  getYPosition = e.offsetY;
  drawing = true;
});
canvas.addEventListener("mousemove", (e) => {
  if (drawing === true) {
    drawLine(context, getXPosition, getYPosition, e.offsetX, e.offsetY);
    getXPosition = e.offsetX;
    getYPosition = e.offsetY;
  }
});
canvas.addEventListener("mouseup", (e) => {
  drawLine(context, getXPosition, getYPosition, e.offsetX, e.offsetY);
  getXPosition = 0;
  getYPosition = 0;
  drawing = false;
});
