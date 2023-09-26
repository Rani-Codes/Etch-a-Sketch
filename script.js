const gridContainer = document.querySelector('.gridContainer');
const button = document.querySelector('button');
let gridSize;

let timesClicked = 0;

button.addEventListener("click", e => {

    if(timesClicked < 1) {
        gridSize = prompt("How large do you want the grid to be? Choose from 1 to 100.", 8)
        while(gridSize < 1 || gridSize > 100) {
            gridSize = prompt("How large do you want the grid to be? Choose from 1 to 100.", 8)
        }
        const removeGrid = gridSize;
        for (i = 0; i < gridSize; i++) {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('row');
            gridContainer.append(rowContainer);
            for(j = 0; j < gridSize; j++) {
                const div = document.createElement('div');
                div.classList.add('single');
                rowContainer.append(div);
            }
        }
        timesClicked++;
    }
    else if(timesClicked >= 1) {
        location.reload();
    }
})
