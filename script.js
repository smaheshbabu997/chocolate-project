document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");
    const totalPriceElement = document.getElementById("totalPrice");

    quantityInput.addEventListener("input", updateTotalPrice);

    function updateTotalPrice() {
        const pricePerChocolate = 2.99;
        const quantity = parseInt(quantityInput.value);

        if (quantity > 8) {
            alert("You cannot select more than 8 chocolates.");
            quantityInput.value = 8;
        }

        const totalPrice = (quantity * pricePerChocolate).toFixed(2);
        totalPriceElement.textContent = totalPrice;
    }
});
