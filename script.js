let cartCount = 0;

const products = [
    {
        name: "Smartphone",
        price: 15000,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Headphones",
        price: 2000,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Shoes",
        price: 3000,
        image: "https://via.placeholder.com/200"
    },
    {
        name: "Watch",
        price: 2500,
        image: "https://via.placeholder.com/200"
    }
];

const productList = document.getElementById("productList");
const cartDisplay = document.getElementById("cartCount");

// Display Products
function showProducts(items) {
    productList.innerHTML = "";

    items.forEach((product, index) => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

// Add to cart
function addToCart() {
    cartCount++;
    cartDisplay.textContent = cartCount;
}

// Search functionality
document.getElementById("searchBox").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(value)
    );

    showProducts(filtered);
});

// Initial Load
showProducts(products);
