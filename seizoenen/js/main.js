const images = {
    "seizoenen": "assets/seasons.jpg",
    "lente": "assets/spring.jpg",
    "zomer": "assets/summer.jpg",
    "herfst": "assets/autumn.jpg",
    "winter": "assets/winter.jpg",
}

const img = document.querySelector('img');
let previousClass = null;

function handleClick(event) {
    const value = event.target.innerHTML;
    img.src = images[value.toLowerCase()];
    if (previousClass) {
        document.body.classList.replace(previousClass, value.toLowerCase());
    } else {
        document.body.classList.add(value.toLowerCase());
    }
    previousClass = value.toLowerCase();
}

