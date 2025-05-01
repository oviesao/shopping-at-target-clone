document.addEventListener('DOMContentLoaded', function() {
    let cartNumbers = localStorage.getItem("cartNumbers");
    if (cartNumbers) {
        try {
            cartNumbers = JSON.parse(cartNumbers);
            const cartLabel = document.querySelector("#cartlogo label");
            if (cartLabel) {
                cartLabel.textContent = cartNumbers;
            }
        } catch (e) {
            console.error("Error parsing cart numbers:", e);
        }
    }
});