document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    const personData = [name, email, age];

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(personData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("მონაცემები წარმატებით შეინახა!");
    document.getElementById("userForm").reset();
});