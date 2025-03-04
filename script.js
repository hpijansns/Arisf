document.addEventListener("DOMContentLoaded", function() {
    let products = [
        { name: "Product 1", price: "₹500" },
        { name: "Product 2", price: "₹1000" }
    ];
    
    let productList = document.getElementById("product-list");
    
    products.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
        productList.appendChild(div);
    });
});