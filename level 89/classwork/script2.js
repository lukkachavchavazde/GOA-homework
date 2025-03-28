const parent = document.getElementById("parent");

parent.innerHTML = "<p>Loading products...</p>";

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        parent.innerHTML = ""; 
        products.forEach(res => {
            parent.innerHTML += `
                <div style="border: 1px solid #ccc; padding: 10px; margin: 10px; width: 250px; display: inline-block;">
                    <p><strong>Title:</strong> ${res.title}</p>
                    <p><strong>Description:</strong> ${res.description}</p>
                    <p><strong>Price:</strong> $${res.price}</p>
                    <img src="${res.image}" width="150" alt="Product Image" />
                </div>
            `;
        });
    })
    .catch(error => {
        parent.innerHTML = "<p>Error loading product data. Please try again.</p>";
        console.error("Error fetching data:", error);
    });
