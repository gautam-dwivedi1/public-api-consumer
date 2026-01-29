const productsDiv = document.getElementById("products");
const searchInput = document.getElementById("search");

let allProducts = [];

productsDiv.innerHTML = "Loading products...";

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data;
    displayProducts(data);
  })
  .catch(() => {
    productsDiv.innerHTML = "Failed to load products.";
  });

function displayProducts(products) {
  productsDiv.innerHTML = "";
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" />
        <h3>${product.title}</h3>
        <p>₹ ${product.price}</p>
      </div>
    `;
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});
