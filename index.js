 const productContainer = document.getElementById("products");

const search = document.getElementById("search");

const sortButton = document.getElementById("sortBtn");

function displayProducts(items = products){

productContainer.innerHTML = "";

items.forEach(product => {

productContainer.innerHTML += `

<div class="card">
<img src="${product.image}" alt="${product.name}">
<h3>${product.name}</h3>

<p>$${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`;

});

}

displayProducts();

let cart = [];

function addToCart(id){

const product = products.find(product => product.id === id);
if(!product) return;
cart.push(product);
document.getElementById("count").textContent = cart.length;
console.log(cart);
}
search.addEventListener("keyup", function(){
const keyword = this.value.toLowerCase();

const filtered = products.filter(product => {

return product.name.toLocaleLowerCase().includes(keyword);

});

displayProducts(filtered);

});

sortButton.addEventListener("click", function(){
let ascending = true
products.sort((a,b) => ascending ? a.price - b.price : b.price - a.price);
ascending = !ascending;
displayProducts(products);

});

