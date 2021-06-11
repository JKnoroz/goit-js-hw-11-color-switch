const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const DELAY = 1000;

// startBtn.addEventListener("click", onStartClick);
// stopBtn.addEventListener("click", onStopClick);

// function onStartClick() {
//   console.log("start");
//   bodyColor(colors[randomIntegerFromInterval(0, colors.length - 1)]);
// }

// const intervalId = setInterval(onStartClick, DELAY);

// function onStopClick() {
//   console.log("stop");
//   clearInterval(intervalId);
// }

function bodyColor(color) {
  document.body.style.backgroundColor = color;
}

startBtn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    console.log("start");
    bodyColor(colors[randomIntegerFromInterval(0, colors.length - 1)]);
  }, DELAY);
});

stopBtn.addEventListener("click", () => {
  clearTimeout(intervalId);
});
