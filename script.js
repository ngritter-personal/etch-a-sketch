const container = document.querySelector('#container');

function createGrid(row, column){
    for (j=0; j<row; j++) {
        const div = document.createElement('div');
        div.classList.add("row");

        container.appendChild(div);

        function createColumn(count) {
            for (i=0; i<count; i++) {
                var divInternal = document.createElement('div');
                divInternal.classList.add("block");
                div.appendChild(divInternal);
                }
        }

        createColumn(column);

    }

}

function resetGrid() {
    let rowColumn = prompt("What size grid do you want?");
    if (rowColumn > 100) return;

    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());

    createGrid(rowColumn, rowColumn);

    const blocks = document.querySelectorAll('.block');
    blocks.forEach(block => block.addEventListener('mouseover', () => block.classList.add('hovered')));
}

createGrid(16,16);

const blocks = document.querySelectorAll('.block');
blocks.forEach(block => block.addEventListener('mouseover', () => block.classList.add('hovered')));

const reset = document.querySelector('#reset');
reset.addEventListener('click', resetGrid);
