const container = document.querySelector("#container");

function makeGrid (rows, columns) {
    for (let i = 0; i < (rows * columns); i++) {
        let grid = document.createElement("div");
        grid.classList.add('square');
        container.appendChild(grid);
    }
};

makeGrid(16, 16);