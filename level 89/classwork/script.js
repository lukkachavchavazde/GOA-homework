const parent = document.getElementById("parent");

parent.innerHTML = "<p>Loading...</p>";

fetch("https://fakestoreapi.com/products/2")
    .then(response => response.json())
    .then(res => {
        parent.innerHTML = `
            <p><strong>Title:</strong> ${res.title}</p>
            <p><strong>Description:</strong> ${res.description}</p>
            <p><strong>Price:</strong> $${res.price}</p>
            <img src="${res.image}" width="200" alt="Product Image" />
        `;
    })
    .catch(error => {
        parent.innerHTML = "<p>Error loading product data. Please try again.</p>";
        console.error("Error fetching data:", error);
    });
