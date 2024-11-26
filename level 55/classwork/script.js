let form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let textInputValue = document.getElementsByName('textInput')[0].value;
    console.log('Text Input Value:', textInputValue);
});
