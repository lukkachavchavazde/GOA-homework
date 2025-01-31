// Hoisting is a JavaScript behavior where declarations are moved to the top of their scope before code execution.


// 1. Hoisting with 'var'
// 'var' declarations are hoisted to the top but are initialized with 'undefined' until assigned.
// Example: 'var a' is hoisted, but 'a = 10' happens later.



// 2. Hoisting with function declarations
// Function declarations are completely hoisted, meaning both the function name and body are moved to the top.
// Example: The function can be called before its actual declaration.



// 3. Hoisting with 'let' and 'const'
// 'let' and 'const' are hoisted, but they remain in the temporal dead zone (TDZ) until declared.
// Accessing them before declaration will throw a ReferenceError.



// 4. Hoisting with function expressions
// Function expressions are not hoisted. Only the variable declaration (not the function definition) is hoisted.
// Example: 'bar' is hoisted, but 'bar = function() {}' happens later.



document.getElementById('parent').addEventListener('click', () => {
    alert("Parent Clicked (Capturing Phase)");
}, true);


document.getElementById('parent').addEventListener('click', () => {
    alert("Parent Clicked (Bubbling Phase)");
}, false); 

document.getElementById('child').addEventListener('click', () => {
    alert("Button Clicked");
});





const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let i = 0;
const images = [
    "/images/bagatata.jpg",
    "/images/banana.jpg",
    "/images/camera.jpg",
    "/images/chiron.jpg",
    "/images/c++.jpg" 
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
