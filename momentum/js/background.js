const images = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
 
const bgImage = document.createElement("img");
bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);