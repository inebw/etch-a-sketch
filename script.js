const container = document.querySelector('.container');

function getRandomColor() {
    const redCol = Math.floor(Math.random() * 255 + 1);
    const greenCol = Math.floor(Math.random() * 255 + 1);
    const blueCol = Math.floor(Math.random() * 255 + 1);
    return `rgb(${redCol}, ${greenCol}, ${blueCol})`
}

const startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    startButton.remove()
    const gridSelectionContainer = document.createElement('div');
    gridSelectionContainer.classList.add('submit-form-container');

    const submitFormTitle = document.createElement('p');
    const rowInputDiv = document.createElement('div');
    const colInputDiv = document.createElement('div');
    const submitButton = document.createElement('button');
    rowInputDiv.classList.add('input-divs');
    colInputDiv.classList.add('input-divs');
    submitButton.classList.add('start')

    const rowForm = document.createElement('form');
    const colForm = document.createElement('form');
    const rowInput = document.createElement('input');
    const colInput = document.createElement('input');

    submitFormTitle.textContent = "Enter the number of Rows and Column!"
    rowForm.textContent = "Rows: ";
    rowForm.name = 'rows';
    rowForm.id = 'rows';
    colForm.textContent = "Cols: ";
    colForm.name = 'cols';
    colForm.id = 'cols'
    submitButton.textContent = 'Submit';

    rowInput.type = 'text';
    colInput.type = 'text';

    rowInput.name = 'rows';
    colInput.name = 'cols';
    rowInputDiv.appendChild(rowForm);
    rowInputDiv.appendChild(rowInput);

    colInputDiv.appendChild(colForm);
    colInputDiv.appendChild(colInput);

    gridSelectionContainer.appendChild(submitFormTitle)
    gridSelectionContainer.appendChild(rowInputDiv);
    gridSelectionContainer.appendChild(colInputDiv);
    gridSelectionContainer.appendChild(submitButton);

    container.append(gridSelectionContainer);

    submitButton.addEventListener('click', () => {

        const allInvalidParas = document.querySelectorAll('.invalid-para')
        allInvalidParas.forEach((elem) => {
            elem.remove()
        })

        noOfRows = rowInput.value
        noOfCols = colInput.value
        rowInput.value = ""
        colInput.value = ""
        
        invalidRow = noOfRows > 100 || noOfRows < 0;
        invalidCol = noOfCols > 100 || noOfCols < 0;
        const invalidPara = document.createElement('p');
        invalidPara.classList.add('invalid-para')
        if (invalidCol || invalidRow){
            const wrongValue = invalidCol ? 
            `Please enter cols between 0-100: ${noOfCols} is Invalid!`:
            `Please enter rows between 0-100: ${noOfRows} is Invalid!`
            invalidPara.textContent = wrongValue
            container.appendChild(invalidPara)
            return
        }

        gridSelectionContainer.remove()

        const gridContainer = document.createElement('div');
        for (i = 0; i <noOfRows; i++) {
            const row = document.createElement('div');
            row.classList.add('row')
            for (j = 0; j<noOfCols; j++) {
                const col = document.createElement('div');
                col.classList.add('col')
                row.appendChild(col);
            }
            gridContainer.appendChild(row);
        }
        container.appendChild(gridContainer)

        const grids = document.querySelectorAll('.col');

        let isMouseDown = false;

        grids.forEach((elem) => {
            elem.addEventListener('mousedown', () => {
                isMouseDown = true;
            })
        })

        grids.forEach((elem) => {
            elem.addEventListener('mouseup', () => {
                isMouseDown = false;
            })
        })


        grids.forEach((elem) => {
            elem.addEventListener('mouseover', () => {
                if (isMouseDown) {
                    elem.style.backgroundColor = getRandomColor();
                }
                
            })
        })

        grids.forEach((elem) => {
            elem.addEventListener('click', () => {
                elem.style.backgroundColor = getRandomColor();
            })
        })

        const resetButton = document.createElement('button')
        resetButton.textContent = 'Reset Grid'
        resetButton.classList.add('start')
        container.appendChild(resetButton)

        resetButton.addEventListener('click', () => {
            resetButton.remove()
            const resetEvent = new Event('click')
            startButton.dispatchEvent(resetEvent);
            gridContainer.remove()

        })
    })

})