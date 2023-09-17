const gridContainer = document.querySelector('.gridContainer');
const divArray = [];

for (i = 0; i < 16; i++) {
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('row');
    gridContainer.append(rowContainer);
    const div = document.createElement('div');
    for(j = 0; j < 16; j++) {
        const div = document.createElement('div');
        console.log('This is a run')
        div.classList.add('single');
        rowContainer.append(div);
    }
}


