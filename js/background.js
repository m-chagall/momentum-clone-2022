const images = [
    "amsterdam-netherlands-1.jpg",
    "geneva-switzerland-1.jpg",
    "geneva-switzerland-2.jpg",
    "milan-italy-1.jpg",
    "milan-italy-2.jpg",
    "milan-italy-3.jpg",
    "milan-italy-4.jpg",
    "milan-italy-5.jpg",
    "seoul-korea-1.jpg",
    "seoul-korea-2.jpg",
    "seoul-korea-3.jpg",
    "seoul-korea-4.jpg",
    "seoul-korea-5.jpg",
    "seoul-korea-6.jpg",
    "seoul-korea-7.jpg",
    "seoul-korea-8.jpg",
    "seoul-korea-9.jpg",
    "zurich-switzerland-1.jpg",
    "zurich-switzerland-2.jpg",
    "zurich-switzerland-3.jpg"
];

const numberOfImages = images.length;
const chosenImage = images[Math.round((Math.random()*100))%numberOfImages];

// const backgroundImage = document.createElement("img");
// backgroundImage.src = `img/${chosenImage}`;
// document.body.appendChild(backgroundImage);
document.body.style.backgroundImage = `url('img/${chosenImage}')`;

function getCity(image) {
    let text = image;
    const split = text.split("-");
    console.log(split);
    const city = split[0];
    const country = split[1];
    const location = document.querySelector("#screen-footer .picture-location");
    location.innerHTML = `${city}, ${country}`;
}
getCity(chosenImage);