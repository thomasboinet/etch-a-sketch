const gridContainer = document.querySelector(".container");
let totalBoxes = 256;
let gridNumber = 16;
const button = document.querySelector("button");

button.addEventListener("click", () => {
  gridNumber = prompt("Choose a number, 1-100");

  if (gridNumber >= 1 && gridNumber <= 100) {
    totalBoxes = gridNumber * gridNumber;
    gridContainer.replaceChildren();
    createGrid();
  }
});

function createGrid() {
  for (let i = 1; i <= totalBoxes; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.style.width = `${100 / gridNumber}%`;
    box.style.height = `${100 / gridNumber}%`;
    box.addEventListener("mouseover", (e) =>
      e.target.classList.add("pixelated-trail-color"),
    );
    gridContainer.appendChild(box);
  }
}

createGrid();
