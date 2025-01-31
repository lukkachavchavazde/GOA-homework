// 1) ახსენით როგორ მუშაობს function hoisting, let/const hoisting

// `let` Hoisting:
// `let` variables are hoisted to the top of their scope, but like `const`, they are not initialized.
// Accessing them before the declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).


// Function Hoisting:
// Function declarations (e.g., function myFunction() { }) are hoisted to the top of their scope.
// This means the function can be called before its definition in the code.

// `const` Hoisting:
// `const` variables are hoisted to the top of their scope, but they are not initialized.
// They cannot be accessed before their declaration, which results in a ReferenceError.
// The variable must be initialized at the time of declaration, otherwise a SyntaxError occurs.




// 2) ახსენით რა არის bubbling & capturing

// Event Bubbling:
// In event bubbling, the event starts at the target element and bubbles up through its ancestors (parent elements).

// The event is first handled by the target element, then it propagates up to its parent, and continues up the DOM tree.


// Event Capturing 
// In event capturing, the event starts from the root element and propagates down to the target element.




const img = document.getElementById("img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let i = 0;
const images = [
    "/images/bagatata.jpg",
    "/images/banana.jpg",
    "/images/camera.jpg",
    "/images/chiron.jpg" 
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


