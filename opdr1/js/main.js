const screen = document.getElementById('screen');
const colors = [
    '#f55d42',
    '#f5aa42',
    '#ddf542',
    '#4bf542',
    '#42f5cb',
    '#42b6f5',
    '#424ef5',
    '#9c42f5',
    '#f242f5',
    '#f542a4'
];

window.onload = () => load();

function load() {
    for (let i = 0; i < 50; i++) {
        let color = colors[randomInt(colors.length)];
        while(document.body.style.background === color) {
            color = colors[randomInt(colors.length)];
        }
        screen.appendChild(createBox(color));
    }
}

function reset() {
    const els = screen.getElementsByTagName('div');
    for (const el of els) {
        el.remove();
    }
    load();
}

function createBox(color) {
    const box = document.createElement('div');
    box.classList.add('box', 'shadow-sm');
    box.style.cssText = `top:${randomInt(window.innerHeight - 150)}px;left:${randomInt(window.innerWidth - 150)}px;background:${color};`;
    box.onclick = () => {
        document.body.style.background = color;
        reset();
    }
    return box;
}

function randomInt(max) {
    return Math.floor(Math.random() * max);
}