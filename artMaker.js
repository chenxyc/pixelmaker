window.onload = function () {
    colorPicker = document.querySelector('.color-picker')

    colorPicker.addEventListener("change", watchColorPicker, false);


    let container = document.querySelector('#canvas');
    container.style.height = '200px';
    container.style.width = '200px';
    container.style.backgroundColor = 'gray';
    container.style.margin = 'auto';
    container.style.display = 'flex';

    for (let row = 0; row < 20; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        rowDiv.style.height = '10px';
        rowDiv.style.width = '200px';

        for (let col = 0; col < 20; col++) {


            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.style.border = '1px solid black';
            box.style.backgroundColor = 'white';
            box.style.height = '8px';
            box.style.width = '8px'
            rowDiv.appendChild(box);
            box.addEventListener('click', bgChange);
        }
        container.appendChild(rowDiv);
    }


    function watchColorPicker(event) {
        color = event.target.value;
        console.log(color)
    }

    function bgChange(e) {
        console.log(color)
        // const rndCol = 'rgb(' + color + ' )';
        e.target.style.backgroundColor = color;
        console.log(e);
    }
}


