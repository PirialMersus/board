const board = document.querySelector("#board");
const colors = [
  "#FA8072",
  "#90EE90",
  "#FFA500",
  "#20B2AA",
  "#E6E6FA",
  "#ADD8E6",
  "#8B008B",
  "#FFDEAD",
];
const SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);

  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #1d1d1d";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
console.log("Гена + Олег + Сергей + Андрей = Любовь");
