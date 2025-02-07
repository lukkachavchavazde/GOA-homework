let age = 20;
let isMember = true;

let accessMessage = (age > 18 && isMember) ? "You have access!" : "Access denied.";
console.log(accessMessage); 


let username = "john_doe";
let password = "password123";


let loginMessage = (username && password) ? "Form Submitted!" : "Please fill in both fields.";
console.log(loginMessage);  



let isLoggedIn = true;
let currentTime = new Date().getHours();  


let greetingMessage = (currentTime > 9 && isLoggedIn) ? "Good Morning, User!" : "You are not logged in or it's too early!";
console.log(greetingMessage);  
