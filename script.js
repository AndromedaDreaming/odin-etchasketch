const container = document.querySelector("#container");
const clearButton = document.querySelector(".button1")

//Create the grid
function makeGrid (rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', columns);
    
    for (let i = 0; i < (rows * columns); i++) {
        const boxElement = document.createElement("div");
        boxElement.classList.add('boxElement');
        boxElement.addEventListener('mouseover', hoverColor);
        container.appendChild(boxElement);
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
clearButton.addEventListener("click", reloadGrid)

function reloadGrid() {
    clearGrid();
    makeGrid(16, 16);
}

function clearGrid() {
    container.innerHTML = '';
}
