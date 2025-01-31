const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let i = 0;
const images = [
    "/images/bagatata.jpg",
    "/images/banana.jpg",
    "/images/camera.jpg",
    "/images/chiron.jpg",
    "/images/c++.jpg",
     "/images/camera.jpg"
];

next.addEventListener("click", () => {
    i++;
    if (i === images.length) {
        i = 0;
    }
    img.src = images[i];
});

prev.addEventListener("click", () => {
    i--;
    if (i === -1) {
        i = images.length - 1;
    }
    img.src = images[i];
});
