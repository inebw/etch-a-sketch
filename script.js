const container = document.querySelector('.container');
for (i = 0; i <16; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    for (j = 0; j<16; j++) {
        const col = document.createElement('div');
        col.classList.add('col')
        row.appendChild(col);
    }
    container.appendChild(row);
}

const grids = document.querySelectorAll('.col');

grids.forEach((elem) => {
    elem.addEventListener('mouseover', () => {
        elem.classList.toggle('on-hover')
    })
})

grids.forEach((elem) => {
    elem.addEventListener('mouseout', () => {
        elem.classList.toggle('on-hover')
    })
})