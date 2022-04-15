const gridcontainer = document.querySelector("#gridcontainer");
const button = document.querySelector(".button1")
const input = document.querySelector("input");
const slider = document.getElementById("boxRange");
let output = document.getElementById("demo");

output.innerHTML = slider.value;

//Create the grid
function makeGrid (rows, columns) {
    gridcontainer.style.setProperty('--grid-rows', rows);
    gridcontainer.style.setProperty('--grid-cols', columns);

    for (let i = 0; i < (rows * columns); i++) {
        const boxElement = document.createElement("div");
        boxElement.classList.add('boxElement');
        boxElement.addEventListener('mouseover', hoverColor);
        gridcontainer.appendChild(boxElement);
    }  
};

makeGrid(16, 16);

//Function for random color
function randomColor () {
    let color = Math.floor(Math.random() * 16777216).toString(16);
    return '#000000'.slice(0, -color.length) + color;
}

//Function for mouse hover
function hoverColor($event) {
    const item = $event.target;
    item.style.backgroundColor = `${randomColor()}`;
}

// Functions to clear and reload grid
button.addEventListener("click", reloadGrid)

function reloadGrid() {
    clearButton();
    makeGrid(16, 16);
}

function clearButton() {
    gridcontainer.innerHTML = '';
    document.getElementById("boxRange").value = "16";
    document.getElementById("demo").innerHTML= "16";
}

//Function to change grid size
function gridSize() {
    let grids = gridcontainer.querySelectorAll(".boxElement");
    grids.forEach(boxElement => boxElement.remove());
    makeGrid(slider.value, slider.value);
}

//Function to display grid size
slider.addEventListener("mouseup", gridSize);
slider.oninput = function() {
    output.innerHTML = this.value;
}
