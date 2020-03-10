window.onload = function (){
    let container = document.querySelector('#canvas');

for (let i = 0; i < 400; i++) 
{
    let box = document.createElement ('span');
    box.style.height = '1px';
    box.style.width = '1px';
    box.style.border = '1px solid black';

    container.appendChild(box);
}
    document.body.appendChild(container);
} 