document.addEventListener('DOMContentLoaded', function() {
    let cartNumbers = localStorage.getItem("cartNumbers");
    if (cartNumbers) {
        try {
            cartNumbers = JSON.parse(cartNumbers);
            const cartCount = document.querySelector(".cart-count");
            if (cartCount) {
                cartCount.textContent = cartNumbers;
            }
        } catch (e) {
            console.error("Error parsing cart numbers:", e);
        }
    }
});
