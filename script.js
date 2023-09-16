const gridContainer = document.querySelector('.gridContainer');
const divArray = [];

for (i = 0; i < 8; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    gridContainer.append(rowContainer);
    const div = document.createElement('div');
    for(j = 1; j < 8; j++) {
        const div = document.createElement('div');
        rowContainer.append(div);
    }
    rowContainer.append(div);

}


