document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  


    if (!document.getElementById("terms").checked) {
        alert("გთხოვთ, ეთანხმებით საიტის წესებს.");
        return;
    }

 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

 
    var gender = "";
    if (document.getElementById("male").checked) {
        gender = "მამაკაცი";
    } else if (document.getElementById("female").checked) {
        gender = "ქალი";
    }

 
    console.log("სახელი: " + name);
    console.log("ემაილი: " + email);
    console.log("პაროლი: " + password);
    console.log("გენდერი: " + gender);

    alert("რეგისტრაცია წარმატებით დასრულდა");

  
    document.getElementById("registrationForm").reset();
});
