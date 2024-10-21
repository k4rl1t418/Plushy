let cartCount = 0;
const products = [
  { id: 1, name: "Mischief Mouse", price: 10, image: "images/product-image.png" },
  { id: 2, name: "Shy Shrew", price: 12, image: "images/product-image.png" },
  { id: 3, name: "Hangry Hamster", price: 15, image: "images/product-image.png" },
  { id: 4, name: "Chilly Chinchilla", price: 8, image: "images/product-image.png" }
];

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}

function showContactAlert() {
  document.getElementById('contact-alert').style.display = 'block';
}

function hideContactAlert() {
  document.getElementById('contact-alert').style.display = 'none';
}

function sortProducts(sortBy) {
  const productGrid = document.getElementById('product-grid');
  productGrid.innerHTML = ''; 

  let sortedProducts = [...products]; 

  if (sortBy === 'newest') {
    sortedProducts.sort((a, b) => b.id - a.id); 
  } else if (sortBy === 'price-low-to-high') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-to-low') {
    sortedProducts.sort((a, b) => b.price - a.price); 
  }

  sortedProducts.forEach(product => {
    const productElement = `
      <div class="product" id="product-${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <button onclick="addToCart()">BUY</button>
      </div>
    `;
    productGrid.innerHTML += productElement;
  });
}

sortProducts('best-selling');