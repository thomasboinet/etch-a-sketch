const gridContainer = document.querySelector(".container");
const totalBoxes = 256;

function createGrid() {
  for (let i = 1; i <= totalBoxes; i++) {
    const box = document.createElement("div");
    box.className = "box";
    // add event listener here for click

    box.addEventListener("mouseover", (e) =>
      e.target.classList.add("pixelated-trail-color"),
    );

    gridContainer.appendChild(box);
  }
}

createGrid();
