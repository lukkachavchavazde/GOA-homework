document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const personData = {
        name: name,
        email: email,
        age: age
    };

    let personIndex = localStorage.length + 1;
    localStorage.setItem(`person${personIndex}`, JSON.stringify(personData));

    alert("მონაცემები წარმატებით შეინახა!");
    document.getElementById("userForm").reset();
});