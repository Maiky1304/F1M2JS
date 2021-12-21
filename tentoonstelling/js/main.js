const img = document.querySelector('img');

function handleClick(event) {
    const buttonValue = event.target.innerHTML;
    img.src = `assets/painting${buttonValue}.jpg`
}