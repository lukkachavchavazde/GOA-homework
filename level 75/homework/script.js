document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    
    if (name === "") {
        alert("Name is required");
    } else {
        alert("Form submitted with name: " + name);
    }
});
