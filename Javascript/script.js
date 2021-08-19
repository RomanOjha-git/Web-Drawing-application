let penSize = 1;
// Pen Picker Logic------------------------------------
let previousPen = document.getElementsByClassName("chose_pen_outline_inner")[0];
function selectPen(event) {
  penSize = event.target.id;
  previousPen.style.boxShadow = "0px 0px 10px rgb(148, 147, 147)";
  event.target.parentElement.style.boxShadow = "0px 0px 10px rgb(77, 77, 77)";
  previousPen = event.target.parentElement;
}

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
function windowRepenSize() {
  let totalWidth = canvasContainer.clientWidth;
  let totalHeight = canvasContainer.clientHeight;
  canvas.setAttribute("width", `${totalWidth}`);
  canvas.setAttribute("height", `${totalHeight}`);
}
let getXPosition;
let getYPosition;
let drawing = false;
document.body.addEventListener("repenSize", () => {
  console.log("change");
});

const drawLine = (context, x1, y1, x2, y2) => {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = penSize;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
  //   context.arc(x1, y1, penSize, 0, 2 * Math.PI);
  //   context.fill();
};
canvas.addEventListener("mousedown", (e) => {
  getXPosition = e.offsetX;
  getYPosition = e.offsetY;
  drawLine(context, getXPosition, getYPosition, e.offsetX, e.offsetY);
  drawing = true;
});
canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
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
