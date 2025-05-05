function fetchSecondProduct() {
    fetch('https://fakestoreapi.com/products/2')
        .then(function(response) {
            return response.json(); 
        })
        .then(function(product) {
            document.getElementById('product-info').innerHTML = `
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            `; 
        });
}