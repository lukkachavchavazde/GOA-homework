document.getElementById("checkAdult").addEventListener("click", function() {
    var isAdult = confirm("შეამოწმეთ, ხართ თუ არა ზრდასრული?");
    if (isAdult) {
        console.log("You are Adult");
    } else {
        console.log("You are kid");
    }
});
