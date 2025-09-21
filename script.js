// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Get all Add to Cart buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Get the cart count element
  const cartCount = document.getElementById("cart-count");

  // Initialize counter
  let count = 0;

  // Loop through buttons and add click event
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      count++;
      cartCount.textContent = count;

       alert("Item added to cart!");
    });
  });
});
