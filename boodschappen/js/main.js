const types = {
    "vegetables": [
        "Sla", "Broccoli", "Spruitjes"
    ],
    "fruits": [
        "Appel", "Banaan", "Kiwi"
    ]
}

function handleClick(event) {
    const obj = event.target.innerHTML;
    addOrRemove(obj);
}

const vegetables = document.querySelector('#vegetables');
const fruits = document.querySelector('#fruits');

function addOrRemove(obj) {
    const type = getType(obj);
    if (type == null) {
        console.error('Deze hoort hier niet');
        return;
    }

    const el = document.createElement('li');
    el.id = obj;
    el.innerHTML = obj;

    this[type].appendChild(el);
}

function getType(obj) {
    for (const type of Object.keys(types)) {
        if (types[type].includes(obj)) return type;
    }
    return null;
}