const btnEl = document.getElementById('btn');

btnEl.addEventListener('mouseover', (coordinates)=> {
    let x = coordinates.pageX - btnEl.offsetLeft;
    let y = coordinates.pageY - btnEl.offsetTop;

    btnEl.style.setProperty('--xPos', x + "px");
    btnEl.style.setProperty('--yPos', y + 'px');
})