let num1 = prompt("1 number");
let num2 = prompt("second number");
let result = Number(num1) + Number(num2);
console.log(result);



let form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
 
    e.preventDefault();


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
});
