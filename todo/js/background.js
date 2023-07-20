const images = [
  "bg00.jpg",
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg",
  "bg04.jpg",
  "bg05.jpg",
  "bg06.jpg",
  "bg07.jpg",
  "bg08.jpg",
  "bg09.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('images/${chosenImage}')`;
document.body.style.backgroundSize = "cover";
