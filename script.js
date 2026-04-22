const products = [
  { id: 1, name: "Mobile", price: 15000, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: 50000, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 2000, img: "https://via.placeholder.com/150" },
  { id: 4, name: "Shoes", price: 3000, img: "https://via.placeholder.com/150" }
];

let cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");

  products.forEach(p => {
    productList.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });

  document.getElementById("total").innerText = total;
}

function viewCart() {
  document.getElementById("cart-section").style.display = "block";
}

function closeCart() {
  document.getElementById("cart-section").style.display = "none";
}

displayProducts();
