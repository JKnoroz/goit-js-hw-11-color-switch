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

let interval;
stopBtn.disabled = true;

const startColorChange = () => {
  interval = setInterval(() => {
    document.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log("я меняю цвет");
  }, DELAY);
};

startBtn.addEventListener("click", () => {
  startColorChange();
  stopBtn.disabled = false;
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  console.log("STOP");
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
