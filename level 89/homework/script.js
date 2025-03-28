const advices = [
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    "Believe you can, and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail."
];

function generateAdvice() {
    const randomIndex = Math.floor(Math.random() * advices.length);
    document.getElementById("advice").innerText = advices[randomIndex];
}