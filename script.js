let cartCount = 0;

const products = [
    {
        name: "Moto G57 Power 5G",
        price: 10999,
        originalPrice: 15999,
        image: "https://via.placeholder.com/220x280",
        rating: 4.4
    },
    {
        name: "Samsung Galaxy A15",
        price: 9999,
        originalPrice: 14999,
        image: "https://via.placeholder.com/220x280",
        rating: 4.2
    },
    {
        name: "iPhone 15",
        price: 65999,
        originalPrice: 79900,
        image: "https://via.placeholder.com/220x280",
        rating: 4.7
    },
    {
        name: "OnePlus 12",
        price: 45999,
        originalPrice: 55999,
        image: "https://via.placeholder.com/220x280",
        rating: 4.5
    },
    {
        name: "Google Pixel 8",
        price: 45999,
        originalPrice: 59999,
        image: "https://via.placeholder.com/220x280",
        rating: 4.6
    },
    {
        name: "Xiaomi 13",
        price: 42999,
        originalPrice: 52999,
        image: "https://via.placeholder.com/220x280",
        rating: 4.3
    }
];

const productList = document.getElementById("productList");

// Display Products
function showProducts(items) {
    productList.innerHTML = "";

    items.forEach((product, index) => {
        const div = document.createElement("div");
        div.classList.add("product");
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <div class="product-price">₹${product.price.toLocaleString()}</div>
            <small style="color: #999; text-decoration: line-through;">₹${product.originalPrice.toLocaleString()}</small>
            <small style="color: #4caf50; margin-left: 8px;">${discount}% off</small>
            <div style="color: #ffd700; margin: 8px 0; font-size: 12px;">⭐${product.rating}</div>
            <button onclick="addToCart()">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

// Add to cart
function addToCart() {
    cartCount++;
    alert(`Product added to cart! Total items: ${cartCount}`);
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
