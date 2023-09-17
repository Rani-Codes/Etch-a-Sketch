const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('button');
let gridSize;

button.addEventListener("click", e => {
    gridSize = prompt("How large do you want the grid to be? Choose from 1 to 100.", 8)
    if(gridSize < 1 || gridSize > 100) {
        gridSize = prompt("How large do you want the grid to be? Choose from 1 to 100.", 8)
    }
    for (i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        gridContainer.append(rowContainer);
        const div = document.createElement('div');
        for(j = 0; j < gridSize; j++) {
            const div = document.createElement('div');
            div.classList.add('single');
            rowContainer.append(div);
        }
    }
})







